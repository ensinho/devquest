import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { auth, db, isFirebaseConfigured } from './firebase/config.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { api } from './api/client.js';
import { collectClientInfo } from './utils/clientInfo.js';

import Header from './components/Header.jsx';
import MobileBottomNav from './components/MobileBottomNav.jsx';
import QuestsPage from './pages/QuestsPage.jsx';
import ArenaPage from './pages/ArenaPage.jsx';
import GuidesPage from './pages/GuidesPage.jsx';
import CharacterPage from './pages/CharacterPage.jsx';
import CompanionMentorDock from './components/companion/CompanionMentorDock.jsx';
import AuthModal from './components/modals/AuthModal.jsx';
import LevelUpModal from './components/modals/LevelUpModal.jsx';
import MascotEvolutionModal from './components/modals/MascotEvolutionModal.jsx';
import GuideModal from './components/modals/GuideModal.jsx';
import OnboardingModal from './components/modals/OnboardingModal.jsx';

import { INITIAL_SKILLS, INITIAL_QUESTS, INITIAL_GUIDES } from './data/gameData.js';
import { PET_REACTIONS, getCompanionStageData } from './data/companionAvatars.js';
import {
  createDefaultProgress,
  loadGuestProgress,
  saveGuestProgress,
  deriveSkillsAndClass,
  applyQuestCompletion,
  applyBonusActivity,
  getBondInfo,
} from './utils/progress.js';
import { initTheme, persistTheme, toggleThemeValue } from './utils/theme.js';
import { playCompanionSound } from './utils/sound.js';

import './styles/app.css';
import './styles/binder.css';
import './styles/toca.css';
import './styles/onboarding.css';
import './styles/account.css';
import './styles/grimoire.css';
import './styles/profile.css';
import './styles/motion.css';

export default function App() {
  const [theme, setTheme] = useState(() => initTheme());
  const [activePage, setActivePage] = useState(() => {
    const pageParam = new URLSearchParams(window.location.search).get('page');
    return ['quests', 'arena', 'guides', 'character'].includes(pageParam)
      ? pageParam
      : 'quests';
  });

  const [currentUser, setCurrentUser] = useState(null);
  const [account, setAccount] = useState(null);
  const [syncState, setSyncState] = useState('idle');
  const [userProgress, setUserProgress] = useState(() => loadGuestProgress());

  const [selectedSkillId, setSelectedSkillId] = useState(null);
  const [activeQuestId, setActiveQuestId] = useState('q1');
  const [previewStage, setPreviewStage] = useState(null);

  const [activeGuide, setActiveGuide] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('skipOnboarding') === '1') return false;
    if (params.get('onboarding') === '1') return true;
    const saved = loadGuestProgress();
    return !saved.onboardingCompleted && saved.completedQuests.length === 0;
  });
  const [levelUpInfo, setLevelUpInfo] = useState(null);
  const [evolutionInfo, setEvolutionInfo] = useState(null);

  const [mentorSpeech, setMentorSpeech] = useState(null);
  const [avatarState, setAvatarState] = useState('idle');
  const [avatarMood, setAvatarMood] = useState('happy');
  const [toastMessage, setToastMessage] = useState('');
  const [scrolledPastCamp, setScrolledPastCamp] = useState(false);

  const reactionTimerRef = useRef(null);
  const toastTimerRef = useRef(null);
  const petIndexRef = useRef(0);
  const lastPetRewardRef = useRef(0);
  const themeRef = useRef(theme);
  const serverProgressRef = useRef(null);
  const sessionReadyRef = useRef(Promise.resolve());
  const inFlightRef = useRef(0);
  const profileTimerRef = useRef(null);
  const pendingProfileRef = useRef({});

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  const isGuestMode = !currentUser;
  const soundEnabled = Boolean(userProgress.soundEnabled);

  const unlockedStage = userProgress.mascotStage ?? 1;
  const displayStage = previewStage ?? unlockedStage;
  const stageData = getCompanionStageData(displayStage);
  const companionDisplayName = userProgress.companionName?.trim() || stageData.name;
  const bondInfo = useMemo(() => getBondInfo(userProgress.bondPoints), [userProgress.bondPoints]);

  // Harmonize the entire app theme with the active companion stage!
  useEffect(() => {
    document.documentElement.setAttribute('data-companion-stage', String(displayStage));
  }, [displayStage]);

  const showToast = useCallback((message) => {
    setToastMessage(message);
    if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    toastTimerRef.current = window.setTimeout(() => setToastMessage(''), 3400);
  }, []);

  const pulseCompanion = useCallback((state, mood, durationMs = 2400) => {
    setAvatarState(state);
    setAvatarMood(mood);
    if (reactionTimerRef.current) window.clearTimeout(reactionTimerRef.current);
    reactionTimerRef.current = window.setTimeout(() => {
      setAvatarState('idle');
      setAvatarMood('neutral');
    }, durationMs);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledPastCamp(window.scrollY > 260);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (reactionTimerRef.current) window.clearTimeout(reactionTimerRef.current);
      if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    };
  }, []);

  /** Server documents → the progress shape the UI uses. */
  const applyServerUser = useCallback((data) => {
    if (!data) return;
    const next = {
      ...createDefaultProgress(data.name),
      ...data,
      completedQuests: Array.isArray(data.completedQuests) ? data.completedQuests : [],
      studiedGuides: Array.isArray(data.studiedGuides) ? data.studiedGuides : [],
      completedQuizzes: Array.isArray(data.completedQuizzes) ? data.completedQuizzes : [],
    };
    serverProgressRef.current = next;
    setUserProgress(next);
  }, []);

  // Accounts: Firebase Auth + the DevQuest API (all writes) + a live Firestore read.
  // Guests never touch the network: their progress stays in localStorage.
  useEffect(() => {
    if (!isFirebaseConfigured || !auth || !db) {
      return undefined;
    }

    let unsubscribeFromFirestore = () => {};
    const unsubscribeFromAuth = onAuthStateChanged(auth, (userAuth) => {
      unsubscribeFromFirestore();
      unsubscribeFromFirestore = () => {};
      if (!userAuth) {
        setCurrentUser(null);
        setAccount(null);
        setSyncState('idle');
        serverProgressRef.current = null;
        sessionReadyRef.current = Promise.resolve();
        setUserProgress(loadGuestProgress());
        return;
      }

      setCurrentUser(userAuth);
      setShowAuthModal(false);
      setSyncState('syncing');
      const guest = loadGuestProgress();
      const hasGuestProgress =
        guest.completedQuests.length > 0 ||
        (guest.studiedGuides ?? []).length > 0 ||
        (guest.completedQuizzes ?? []).length > 0 ||
        guest.onboardingCompleted;

      const ready = api
        .session({
          client: collectClientInfo(themeRef.current),
          guestProgress: hasGuestProgress ? guest : undefined,
        })
        .then((res) => {
          applyServerUser(res.user);
          setAccount(res.account);
          setSyncState('idle');
          if (res.user?.onboardingCompleted) setShowOnboarding(false);
          if (res.imported) showToast('Seu progresso deste navegador agora está salvo na sua conta.');
          unsubscribeFromFirestore = onSnapshot(
            doc(db, 'users', userAuth.uid),
            (snapshot) => {
              if (snapshot.exists() && inFlightRef.current === 0) applyServerUser(snapshot.data());
            },
            () => setSyncState('error')
          );
        })
        .catch((err) => {
          setSyncState('error');
          showToast(err.message);
        });
      sessionReadyRef.current = ready;
    });

    return () => {
      unsubscribeFromAuth();
      unsubscribeFromFirestore();
    };
  }, [applyServerUser, showToast]);

  // Derived skills & hero class (pure useMemo, zero infinite useEffect)
  const { skills, heroClass } = useMemo(
    () => deriveSkillsAndClass(userProgress.completedQuests, INITIAL_SKILLS, INITIAL_QUESTS),
    [userProgress.completedQuests]
  );

  const questsWithStatus = useMemo(() => {
    const doneSet = new Set(userProgress.completedQuests);
    return INITIAL_QUESTS.map((q) => ({ ...q, completed: doneSet.has(q.id) }));
  }, [userProgress.completedQuests]);

  const recommendedQuest = useMemo(() => {
    const unlockedIds = new Set(
      skills.filter((s) => s.status !== 'locked').map((s) => s.id)
    );
    return (
      questsWithStatus.find((q) => !q.completed && unlockedIds.has(q.skillId)) ?? null
    );
  }, [skills, questsWithStatus]);

  // Until the player picks a card, the map opens on the skill of their next quest.
  const selectedSkill = useMemo(() => {
    return (
      skills.find((s) => s.id === selectedSkillId) ??
      skills.find((s) => s.id === recommendedQuest?.skillId) ??
      skills[0]
    );
  }, [skills, selectedSkillId, recommendedQuest]);

  const questsForSelectedSkill = useMemo(() => {
    if (!selectedSkill) return [];
    return questsWithStatus.filter((q) => q.skillId === selectedSkill.id);
  }, [questsWithStatus, selectedSkill]);

  /**
   * Optimistic update. Guests persist to localStorage; signed-in players send
   * the action to the API, which recomputes everything and is the source of
   * truth (its answer and the Firestore snapshot overwrite the guess).
   */
  const commitProgress = useCallback(
    (nextProgress, serverCall) => {
      setUserProgress(nextProgress);
      if (!currentUser) {
        saveGuestProgress(nextProgress);
        return Promise.resolve(null);
      }
      if (!serverCall) return Promise.resolve(null);
      inFlightRef.current += 1;
      setSyncState('syncing');
      return sessionReadyRef.current
        .then(serverCall)
        .then((res) => {
          inFlightRef.current -= 1;
          if (inFlightRef.current === 0) {
            if (res?.user) applyServerUser(res.user);
            setSyncState('idle');
          }
          return res;
        })
        .catch((err) => {
          inFlightRef.current -= 1;
          setSyncState('error');
          if (serverProgressRef.current) setUserProgress(serverProgressRef.current);
          showToast(err.message);
          return null;
        });
    },
    [currentUser, applyServerUser, showToast]
  );

  /** Text fields (names) are debounced so typing doesn't flood the API. */
  const queueProfilePatch = useCallback(
    (patch) => {
      if (!currentUser) return;
      pendingProfileRef.current = { ...pendingProfileRef.current, ...patch };
      if (profileTimerRef.current) window.clearTimeout(profileTimerRef.current);
      profileTimerRef.current = window.setTimeout(() => {
        const body = pendingProfileRef.current;
        pendingProfileRef.current = {};
        inFlightRef.current += 1;
        sessionReadyRef.current
          .then(() => api.updateProfile(body))
          .catch((err) => showToast(err.message))
          .finally(() => {
            inFlightRef.current -= 1;
          });
      }, 600);
    },
    [currentUser, showToast]
  );

  const triggerProgressionModals = useCallback(
    (outcome) => {
      if (outcome.evolved) {
        playCompanionSound('evolve', soundEnabled);
        setPreviewStage(null);
        setEvolutionInfo({ newStage: outcome.newStage });
      } else if (outcome.leveledUp) {
        playCompanionSound('win', soundEnabled);
        setLevelUpInfo({ newLevel: outcome.newLevel });
      }
    },
    [soundEnabled]
  );

  const handleToggleTheme = () => {
    const next = toggleThemeValue(theme);
    persistTheme(next);
    setTheme(next);
    if (currentUser) api.updateProfile({ theme: next }).catch(() => {});
    playCompanionSound('check', soundEnabled);
    showToast(next === 'light' ? 'Tema claro ativado' : 'Tema escuro ativado');
  };

  const handleToggleSound = () => {
    const nextEnabled = !soundEnabled;
    commitProgress({ ...userProgress, soundEnabled: nextEnabled }, () =>
      api.updateProfile({ soundEnabled: nextEnabled })
    );
    if (nextEnabled) {
      playCompanionSound('pet', true);
      showToast(`Sons sutis de ${companionDisplayName} ativados.`);
    } else {
      showToast('Sons silenciados.');
    }
  };

  const handleSignUp = async (email, password) => {
    if (!auth) return;
    // onAuthStateChanged → POST /api/session creates the account documents
    // and imports this browser's guest progress.
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    sendEmailVerification(cred.user).catch(() => {});
    showToast('Conta criada! Enviamos um link de confirmação para o seu e-mail.');
  };

  const handleLogin = async (email, password) => {
    if (!auth) return;
    await signInWithEmailAndPassword(auth, email, password);
  };

  const handlePasswordReset = async (email) => {
    if (!auth) return;
    await sendPasswordResetEmail(auth, email);
  };

  const handleLogout = async () => {
    if (!auth) return;
    await signOut(auth);
    showToast('Sessão encerrada. Você voltou ao progresso deste navegador.');
  };

  const handleResendVerification = async () => {
    if (!auth?.currentUser) return;
    try {
      await sendEmailVerification(auth.currentUser);
      showToast('Link de confirmação reenviado. Confira sua caixa de entrada.');
    } catch {
      showToast('Não deu para reenviar agora. Tente em alguns minutos.');
    }
  };

  const handleExportData = async () => {
    try {
      const data = await api.exportData();
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `devquest-dados-${new Date().toISOString().slice(0, 10)}.json`;
      link.click();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
      showToast('Seus dados foram baixados.');
    } catch (err) {
      showToast(err.message);
    }
  };

  /** Re-auth with the password (fresh auth_time), then the API erases everything. */
  const handleDeleteAccount = async (password) => {
    const user = auth?.currentUser;
    if (!user?.email) return;
    await reauthenticateWithCredential(user, EmailAuthProvider.credential(user.email, password));
    await user.getIdToken(true);
    await api.deleteAccount();
    await signOut(auth).catch(() => {});
    showToast('Conta excluída. Todos os seus dados foram apagados.');
  };

  const handleCompleteQuest = useCallback(
    async (questId, code) => {
      const outcome = applyQuestCompletion(userProgress, questId, INITIAL_QUESTS);
      if (!outcome.xpGained) return;

      commitProgress(outcome.nextProgress, () => api.progress({ action: 'quest', questId, code }));
      setPreviewStage(null);
      pulseCompanion('done', 'happy', 3200);
      setMentorSpeech({
        tag: `${companionDisplayName} comemora!`,
        text: `Vitória! +${outcome.xpGained} XP e +${outcome.bondGain} de Vínculo! Nossa dupla está imparável.`,
      });
      showToast(`Quest concluída! +${outcome.xpGained} XP · +${outcome.bondGain} Vínculo`);
      triggerProgressionModals(outcome);
    },
    [
      userProgress,
      commitProgress,
      pulseCompanion,
      showToast,
      companionDisplayName,
      triggerProgressionModals,
    ]
  );

  const handleAnswerQuiz = useCallback(
    async (quiz, isCorrect, answerIndex) => {
      const report = () => api.progress({ action: 'quiz', quizId: quiz.id, answerIndex });
      if (isCorrect) {
        playCompanionSound('win', soundEnabled);
        const outcome = applyBonusActivity(userProgress, {
          xp: quiz.xp,
          bondGain: 15,
          quizId: quiz.id,
        });
        commitProgress(outcome.nextProgress, report);
        pulseCompanion('done', 'happy', 2600);
        setMentorSpeech({
          tag: `Desafio Relâmpago · Acertou!`,
          text: quiz.rightText,
        });
        showToast(
          outcome.xpGained > 0
            ? `Acertou! +${outcome.xpGained} XP · +${outcome.bondGain} Vínculo`
            : `Acertou! +${outcome.bondGain} Vínculo com ${companionDisplayName}`
        );
        triggerProgressionModals(outcome);
      } else {
        if (currentUser && Number.isInteger(answerIndex)) {
          sessionReadyRef.current.then(report).catch(() => {});
        }
        playCompanionSound('error', soundEnabled);
        pulseCompanion('blocked', 'neutral', 2000);
        setMentorSpeech({
          tag: `${companionDisplayName} te explica`,
          text: quiz.wrongText,
        });
      }
    },
    [
      currentUser,
      userProgress,
      commitProgress,
      pulseCompanion,
      showToast,
      companionDisplayName,
      soundEnabled,
      triggerProgressionModals,
    ]
  );

  const handleFinishGuide = useCallback(
    async (guide) => {
      const outcome = applyBonusActivity(userProgress, {
        xp: 10,
        bondGain: 12,
        guideId: guide.id,
      });
      if (outcome.xpGained > 0) {
        commitProgress(outcome.nextProgress, () => api.progress({ action: 'guide', guideId: guide.id }));
        playCompanionSound('win', soundEnabled);
        pulseCompanion('done', 'happy', 2400);
        showToast(`Grimório estudado com ${companionDisplayName}! +10 XP · +12 Vínculo`);
        triggerProgressionModals(outcome);
      }
    },
    [
      userProgress,
      commitProgress,
      pulseCompanion,
      showToast,
      companionDisplayName,
      soundEnabled,
      triggerProgressionModals,
    ]
  );

  const handleOpenQuestInArena = useCallback((quest) => {
    setSelectedSkillId(quest.skillId);
    setActiveQuestId(quest.id);
    setActivePage('arena');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSelectSkill = (skill) => {
    setSelectedSkillId(skill.id);
    setMentorSpeech({
      tag: `Dica de ${companionDisplayName} · ${skill.name}`,
      text: skill.mentorLesson,
    });
    pulseCompanion('waiting', 'happy', 1800);
  };

  const describeLock = (skill) => {
    const missing = skill.dependencies
      .map((id) => skills.find((s) => s.id === id))
      .filter((dep) => dep && dep.status !== 'completed')
      .map((dep) => dep.name);
    return missing.length
      ? `${skill.name} ainda está virada. Termine ${missing.join(' e ')} e ela vira pra cima.`
      : `${skill.name} ainda está virada.`;
  };

  const handleLockedSkill = (skill) => {
    playCompanionSound('error', soundEnabled);
    pulseCompanion('blocked', 'neutral', 1600);
    setMentorSpeech({ tag: `${skill.name} bloqueada`, text: describeLock(skill) });
  };

  const handleHoverSkill = (skill) => {
    if (skill.status === 'locked') {
      setMentorSpeech({ tag: `${skill.name} bloqueada`, text: describeLock(skill) });
      setAvatarState('waiting');
      return;
    }
    setMentorSpeech({
      tag: `${companionDisplayName} explica · ${skill.name}`,
      text: skill.mentorLesson,
    });
  };

  const handlePet = () => {
    const line = PET_REACTIONS[petIndexRef.current % PET_REACTIONS.length];
    petIndexRef.current += 1;
    playCompanionSound('pet', soundEnabled);
    setMentorSpeech({
      tag: `${companionDisplayName} adorou!`,
      text: line,
    });
    pulseCompanion('done', 'happy', 2200);

    const now = Date.now();
    if (now - lastPetRewardRef.current > 4000) {
      lastPetRewardRef.current = now;
      const nextBond = (userProgress.bondPoints ?? 0) + 10;
      const prevLevel = getBondInfo(userProgress.bondPoints).bondLevel;
      const nextLevel = getBondInfo(nextBond).bondLevel;
      commitProgress({ ...userProgress, bondPoints: nextBond }, () => api.progress({ action: 'pet' }));
      if (nextLevel > prevLevel) {
        showToast(`Vínculo subiu para Nível ${nextLevel}! Novo acessório pode estar liberado.`);
      }
    }
  };

  const handlePreviewStage = (stageNum) => {
    setPreviewStage(stageNum);
    const target = getCompanionStageData(stageNum);
    playCompanionSound('check', soundEnabled);
    pulseCompanion('done', 'happy', 1800);
    setMentorSpeech({
      tag: `Tema sincronizado · ${target.realmName}`,
      text: `A interface inteira entrou em ${target.themeLabel} para acompanhar ${target.name} (${target.title})!`,
    });
  };

  const handleSelectAccessory = (accessoryId) => {
    commitProgress({ ...userProgress, accessoryId }, () => api.updateProfile({ accessoryId }));
    playCompanionSound('pet', soundEnabled);
    pulseCompanion('done', 'happy', 1800);
    showToast(`Acessório equipado em ${companionDisplayName}!`);
  };

  const handleAvatarSelect = (avatarId) => {
    commitProgress({ ...userProgress, avatarId }, () => api.updateProfile({ avatarId }));
    showToast('Selo da classe atualizado.');
  };

  const handleUpdateName = (name) => {
    commitProgress({ ...userProgress, name: name || 'Aventureiro' });
    queueProfilePatch({ name });
  };

  const handleUpdateCompanionName = (companionName) => {
    commitProgress({ ...userProgress, companionName });
    queueProfilePatch({ companionName });
  };

  const handleResetSandbox = () => {
    const fresh = createDefaultProgress('Aventureiro');
    setPreviewStage(null);
    setSelectedSkillId(null);
    commitProgress(fresh, () => api.progress({ action: 'reset' }));
    setShowOnboarding(true);
    setMentorSpeech({
      tag: 'Nova jornada iniciada',
      text: 'Tudo zerado! Vamos conquistar a Toca da Centelha juntos desde HTML5?',
    });
    showToast('Progresso local reiniciado.');
  };

  const handleFinishOnboarding = ({ name, companionName, avatarId, spellPassed, spellCode, petBonus }) => {
    const base = {
      ...userProgress,
      name,
      companionName,
      avatarId,
      onboardingCompleted: true,
    };
    const outcome = applyBonusActivity(base, {
      xp: spellPassed ? 25 : 0,
      bondGain: (spellPassed ? 20 : 5) + (petBonus ?? 0),
    });
    commitProgress(outcome.nextProgress, () =>
      api.progress({
        action: 'onboarding',
        name,
        companionName,
        avatarId,
        spellCode,
        petted: (petBonus ?? 0) > 0,
      })
    );
    setPreviewStage(null);
    setShowOnboarding(false);
    pulseCompanion('done', 'happy', 2600);
    showToast(
      spellPassed
        ? `Boas-vindas, ${name}! +25 XP e +${outcome.bondGain} Vínculo pela Primeira Centelha!`
        : `Boas-vindas ao DevQuest, ${name}!`
    );
  };

  const handleSkipOnboarding = () => {
    commitProgress({ ...userProgress, onboardingCompleted: true }, () =>
      api.progress({ action: 'skipOnboarding' })
    );
    setPreviewStage(null);
    setShowOnboarding(false);
  };

  const defaultMentorMessage = useMemo(() => {
    if (mentorSpeech) return mentorSpeech;
    if (selectedSkill) {
      return {
        tag: `${companionDisplayName} · ${selectedSkill.name}`,
        text: selectedSkill.mentorLesson,
      };
    }
    return {
      tag: `${companionDisplayName} pronto para codar`,
      text: 'Escolha uma carta aberta no mapa ou faça o quiz rápido comigo.',
    };
  }, [mentorSpeech, selectedSkill, companionDisplayName]);

  const dockTip = useMemo(() => {
    if (activePage === 'guides') {
      return 'Cada Grimório lido pela primeira vez dá +10 XP e sobe nosso Vínculo. Clique em um para ler comigo!';
    }
    if (activePage === 'character') {
      return 'Aqui você pode me dar um apelido, testar expressões, trocar acessórios e harmonizar o tema do app!';
    }
    return defaultMentorMessage.text;
  }, [activePage, defaultMentorMessage.text]);

  // Per-page document title (tabs, history and search snippets read it).
  useEffect(() => {
    const titles = {
      quests: 'DevQuest · Aprenda programação full-stack com um fox de estimação',
      arena: 'Arena · DevQuest',
      guides: 'Grimórios · DevQuest',
      character: 'Herói & Mascote · DevQuest',
    };
    document.title = titles[activePage] ?? titles.quests;
  }, [activePage]);

  return (
    <div className={`dq-app dq-app--${activePage}`}>
      <div className="dq-shell">
        <Header
          user={userProgress}
          userClass={heroClass}
          displayStage={displayStage}
          activePage={activePage}
          onNavClick={setActivePage}
          theme={theme}
          onToggleTheme={handleToggleTheme}
          soundEnabled={soundEnabled}
          onToggleSound={handleToggleSound}
          isGuestMode={isGuestMode}
          syncState={syncState}
          onOpenAuth={() => setShowAuthModal(true)}
        />

        <main key={activePage} className="dq-main dq-main--enter">
          {activePage === 'quests' && (
            <QuestsPage
              user={userProgress}
              skills={skills}
              selectedSkill={selectedSkill}
              onSelectSkill={handleSelectSkill}
              onHoverSkill={handleHoverSkill}
              onLockedSkill={handleLockedSkill}
              quests={questsForSelectedSkill}
              allQuests={questsWithStatus}
              recommendedQuest={recommendedQuest}
              totalQuests={INITIAL_QUESTS.length}
              onStartQuest={handleOpenQuestInArena}
              onOpenCharacter={() => {
                setActivePage('character');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onToggleTheme={handleToggleTheme}
              displayStage={displayStage}
              accessoryId={userProgress.accessoryId ?? 'spark'}
              companionName={userProgress.companionName}
              completedCount={userProgress.completedQuests.length}
              completedQuizzes={userProgress.completedQuizzes ?? []}
              bondInfo={bondInfo}
              mentorMessage={defaultMentorMessage.text}
              avatarState={avatarState}
              avatarMood={avatarMood}
              theme={theme}
              onPet={handlePet}
              onAnswerQuiz={handleAnswerQuiz}
            />
          )}

          {activePage === 'arena' && (
            <ArenaPage
              skills={skills}
              quests={questsWithStatus}
              activeQuestId={activeQuestId}
              onSelectQuest={(questId) => {
                setActiveQuestId(questId);
                const found = INITIAL_QUESTS.find((q) => q.id === questId);
                if (found) setSelectedSkillId(found.skillId);
              }}
              onCompleteQuest={handleCompleteQuest}
              onBackToMap={() => setActivePage('quests')}
              displayStage={displayStage}
              accessoryId={userProgress.accessoryId ?? 'spark'}
              companionName={userProgress.companionName}
              theme={theme}
              onSound={(kind) => playCompanionSound(kind, soundEnabled)}
            />
          )}

          {activePage === 'guides' && (
            <GuidesPage
              guides={INITIAL_GUIDES}
              studiedGuides={userProgress.studiedGuides ?? []}
              quests={questsWithStatus}
              skills={skills}
              focusSkillId={recommendedQuest?.skillId}
              onOpenGuide={setActiveGuide}
              displayStage={displayStage}
              accessoryId={userProgress.accessoryId ?? 'spark'}
              companionName={userProgress.companionName}
              theme={theme}
              onPet={handlePet}
            />
          )}

          {activePage === 'character' && (
            <CharacterPage
              user={userProgress}
              userClass={heroClass}
              bondInfo={bondInfo}
              completedCount={userProgress.completedQuests.length}
              totalQuests={INITIAL_QUESTS.length}
              unlockedStage={unlockedStage}
              displayStage={displayStage}
              onPreviewStage={handlePreviewStage}
              accessoryId={userProgress.accessoryId ?? 'spark'}
              onSelectAccessory={handleSelectAccessory}
              onAvatarSelect={handleAvatarSelect}
              onUpdateName={handleUpdateName}
              onUpdateCompanionName={handleUpdateCompanionName}
              onReplayOnboarding={() => setShowOnboarding(true)}
              onResetSandbox={handleResetSandbox}
              onLogout={handleLogout}
              isGuestMode={isGuestMode}
              account={account}
              onOpenAuth={() => setShowAuthModal(true)}
              onResendVerification={handleResendVerification}
              onExportData={handleExportData}
              onDeleteAccount={handleDeleteAccount}
              theme={theme}
              onPet={handlePet}
            />
          )}
        </main>
      </div>

      <CompanionMentorDock
        stage={displayStage}
        accessoryId={userProgress.accessoryId ?? 'spark'}
        companionName={userProgress.companionName}
        theme={theme}
        avatarState={avatarState}
        avatarMood={avatarMood}
        tipMessage={dockTip}
        recommendedQuest={recommendedQuest}
        onLaunchRecommended={handleOpenQuestInArena}
        onPet={handlePet}
        hidden={Boolean(
          showOnboarding ||
            activePage === 'arena' ||
            activeGuide ||
            evolutionInfo ||
            levelUpInfo ||
            ((activePage === 'quests' || activePage === 'character' || activePage === 'guides') &&
              !scrolledPastCamp)
        )}
      />

      {!showOnboarding && (
        <MobileBottomNav
          activePage={activePage}
          onNavClick={(page) => {
            setActivePage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {showOnboarding && (
        <OnboardingModal
          initialName={userProgress.name}
          initialCompanionName={userProgress.companionName}
          initialAvatarId={userProgress.avatarId}
          theme={theme}
          soundEnabled={soundEnabled}
          previewStage={previewStage}
          onPreviewStage={handlePreviewStage}
          onToggleTheme={handleToggleTheme}
          onToggleSound={handleToggleSound}
          onComplete={handleFinishOnboarding}
          onSkip={handleSkipOnboarding}
          onSound={(kind) => playCompanionSound(kind, soundEnabled)}
        />
      )}

      {showAuthModal && (
        <AuthModal
          onClose={() => setShowAuthModal(false)}
          onSignUp={handleSignUp}
          onLogin={handleLogin}
          onPasswordReset={handlePasswordReset}
          isFirebaseConfigured={isFirebaseConfigured}
        />
      )}

      {activeGuide && (
        <GuideModal
          guide={activeGuide}
          isStudied={(userProgress.studiedGuides ?? []).includes(activeGuide.id)}
          quests={questsWithStatus}
          skills={skills}
          onPractice={handleOpenQuestInArena}
          displayStage={displayStage}
          accessoryId={userProgress.accessoryId ?? 'spark'}
          companionName={userProgress.companionName}
          theme={theme}
          onFinishReading={handleFinishGuide}
          onClose={() => setActiveGuide(null)}
        />
      )}

      {levelUpInfo && (
        <LevelUpModal
          newLevel={levelUpInfo.newLevel}
          displayStage={displayStage}
          accessoryId={userProgress.accessoryId ?? 'spark'}
          theme={theme}
          onClose={() => setLevelUpInfo(null)}
        />
      )}

      {evolutionInfo && (
        <MascotEvolutionModal
          newStage={evolutionInfo.newStage}
          accessoryId={userProgress.accessoryId ?? 'spark'}
          theme={theme}
          onClose={() => setEvolutionInfo(null)}
        />
      )}

      {toastMessage && (
        <div className="dq-toast" role="status" aria-live="polite">
          {toastMessage}
        </div>
      )}
    </div>
  );
}
