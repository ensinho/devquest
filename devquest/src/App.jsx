import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { auth, db, isFirebaseConfigured } from './firebase/config.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { doc, setDoc, onSnapshot, updateDoc } from 'firebase/firestore';

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

export default function App() {
  const [theme, setTheme] = useState(() => initTheme());
  const [activePage, setActivePage] = useState(() => {
    const pageParam = new URLSearchParams(window.location.search).get('page');
    return ['quests', 'arena', 'guides', 'character'].includes(pageParam)
      ? pageParam
      : 'quests';
  });

  const [currentUser, setCurrentUser] = useState(null);
  const [userProgress, setUserProgress] = useState(() => loadGuestProgress());

  const [selectedSkillId, setSelectedSkillId] = useState('html');
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

  // Optional Firebase sync — never blocks Guest Sandbox visitors
  useEffect(() => {
    if (!isFirebaseConfigured || !auth || !db) {
      return undefined;
    }

    let unsubscribeFromFirestore = () => {};
    const unsubscribeFromAuth = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        setCurrentUser(userAuth);
        setShowAuthModal(false);
        const userDocRef = doc(db, 'users', userAuth.uid);
        unsubscribeFromFirestore = onSnapshot(userDocRef, (snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.data();
            setUserProgress({
              ...createDefaultProgress(data.name),
              ...data,
              completedQuests: Array.isArray(data.completedQuests) ? data.completedQuests : [],
              studiedGuides: Array.isArray(data.studiedGuides) ? data.studiedGuides : [],
              completedQuizzes: Array.isArray(data.completedQuizzes) ? data.completedQuizzes : [],
            });
          }
        });
      } else {
        setCurrentUser(null);
        setUserProgress(loadGuestProgress());
        unsubscribeFromFirestore();
      }
    });

    return () => {
      unsubscribeFromAuth();
      unsubscribeFromFirestore();
    };
  }, []);

  // Derived skills & hero class (pure useMemo, zero infinite useEffect)
  const { skills, heroClass } = useMemo(
    () => deriveSkillsAndClass(userProgress.completedQuests, INITIAL_SKILLS, INITIAL_QUESTS),
    [userProgress.completedQuests]
  );

  const questsWithStatus = useMemo(() => {
    const doneSet = new Set(userProgress.completedQuests);
    return INITIAL_QUESTS.map((q) => ({ ...q, completed: doneSet.has(q.id) }));
  }, [userProgress.completedQuests]);

  const selectedSkill = useMemo(() => {
    return skills.find((s) => s.id === selectedSkillId) ?? skills[0];
  }, [skills, selectedSkillId]);

  const questsForSelectedSkill = useMemo(() => {
    if (!selectedSkill) return [];
    return questsWithStatus.filter((q) => q.skillId === selectedSkill.id);
  }, [questsWithStatus, selectedSkill]);

  const recommendedQuest = useMemo(() => {
    const unlockedIds = new Set(
      skills.filter((s) => s.status !== 'locked').map((s) => s.id)
    );
    return (
      questsWithStatus.find((q) => !q.completed && unlockedIds.has(q.skillId)) ?? null
    );
  }, [skills, questsWithStatus]);

  const persistProgress = useCallback(
    async (nextProgress) => {
      setUserProgress(nextProgress);
      if (currentUser && db) {
        await updateDoc(doc(db, 'users', currentUser.uid), nextProgress);
      } else {
        saveGuestProgress(nextProgress);
      }
    },
    [currentUser]
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
    playCompanionSound('check', soundEnabled);
    showToast(
      next === 'light'
        ? `Warm Vellum Claro · ${stageData.realmName}`
        : `Obsidian Escuro · ${stageData.realmName}`
    );
  };

  const handleToggleSound = () => {
    const nextEnabled = !soundEnabled;
    persistProgress({ ...userProgress, soundEnabled: nextEnabled });
    if (nextEnabled) {
      playCompanionSound('pet', true);
      showToast(`Sons sutis de ${companionDisplayName} ativados.`);
    } else {
      showToast('Sons silenciados.');
    }
  };

  const handleSignUp = async (email, password) => {
    if (!auth || !db) return;
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    const fresh = createDefaultProgress(email.split('@')[0]);
    await setDoc(doc(db, 'users', cred.user.uid), fresh);
  };

  const handleLogin = async (email, password) => {
    if (!auth) return;
    await signInWithEmailAndPassword(auth, email, password);
  };

  const handleLogout = async () => {
    if (!auth) return;
    await signOut(auth);
    showToast('Sessão encerrada. Você voltou ao Modo Sandbox local.');
  };

  const handleCompleteQuest = useCallback(
    async (questId) => {
      const outcome = applyQuestCompletion(userProgress, questId, INITIAL_QUESTS);
      if (!outcome.xpGained) return;

      await persistProgress(outcome.nextProgress);
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
      persistProgress,
      pulseCompanion,
      showToast,
      companionDisplayName,
      triggerProgressionModals,
    ]
  );

  const handleAnswerQuiz = useCallback(
    async (quiz, isCorrect) => {
      if (isCorrect) {
        playCompanionSound('win', soundEnabled);
        const outcome = applyBonusActivity(userProgress, {
          xp: quiz.xp,
          bondGain: 15,
          quizId: quiz.id,
        });
        await persistProgress(outcome.nextProgress);
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
        playCompanionSound('error', soundEnabled);
        pulseCompanion('blocked', 'neutral', 2000);
        setMentorSpeech({
          tag: `${companionDisplayName} te explica`,
          text: quiz.wrongText,
        });
      }
    },
    [
      userProgress,
      persistProgress,
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
        await persistProgress(outcome.nextProgress);
        playCompanionSound('win', soundEnabled);
        pulseCompanion('done', 'happy', 2400);
        showToast(`Grimório estudado com ${companionDisplayName}! +10 XP · +12 Vínculo`);
        triggerProgressionModals(outcome);
      }
    },
    [
      userProgress,
      persistProgress,
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

  const handleHoverSkill = (skill) => {
    if (skill.status === 'locked') {
      setMentorSpeech({
        tag: `${skill.name} bloqueada`,
        text: `Conclua as dependências anteriores no mapa para desbloquear ${skill.name} e novos desafios!`,
      });
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
      persistProgress({ ...userProgress, bondPoints: nextBond });
      if (nextLevel > prevLevel) {
        showToast(`Vínculo subiu para Nível ${nextLevel}! Novo acessório pode estar liberado.`);
      }
    }
  };

  const handleAskLesson = () => {
    if (!selectedSkill) return;
    playCompanionSound('check', soundEnabled);
    setMentorSpeech({
      tag: `Aula rápida · ${selectedSkill.name}`,
      text: selectedSkill.mentorLesson,
    });
    pulseCompanion('waiting', 'happy', 2400);
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
    persistProgress({ ...userProgress, accessoryId });
    playCompanionSound('pet', soundEnabled);
    pulseCompanion('done', 'happy', 1800);
    showToast(`Acessório equipado em ${companionDisplayName}!`);
  };

  const handleAvatarSelect = (avatarId) => {
    persistProgress({ ...userProgress, avatarId });
    showToast('Selo da classe atualizado.');
  };

  const handleUpdateName = (name) => {
    persistProgress({ ...userProgress, name: name || 'Aventureiro' });
  };

  const handleUpdateCompanionName = (companionName) => {
    persistProgress({ ...userProgress, companionName });
  };

  const handleResetSandbox = () => {
    const fresh = createDefaultProgress('Aventureiro');
    setPreviewStage(null);
    setSelectedSkillId('html');
    persistProgress(fresh);
    setShowOnboarding(true);
    setMentorSpeech({
      tag: 'Nova jornada iniciada',
      text: 'Tudo zerado! Vamos conquistar a Toca da Centelha juntos desde HTML5?',
    });
    showToast('Progresso local reiniciado.');
  };

  const handleFinishOnboarding = ({ name, companionName, avatarId, spellPassed, petBonus }) => {
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
    persistProgress(outcome.nextProgress);
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
    persistProgress({ ...userProgress, onboardingCompleted: true });
    setPreviewStage(null);
    setShowOnboarding(false);
  };

  const defaultMentorMessage = useMemo(() => {
    if (mentorSpeech) return mentorSpeech;
    if (selectedSkill) {
      return {
        tag: `Mentor ao vivo · ${selectedSkill.name}`,
        text: selectedSkill.mentorLesson,
      };
    }
    return {
      tag: `${companionDisplayName} pronto para codar`,
      text: 'Clique em qualquer constelação do mapa ou experimente o Desafio Relâmpago comigo!',
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

  return (
    <div className="dq-app">
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
          onOpenAuth={() => setShowAuthModal(true)}
        />

        <main className="dq-main">
          {activePage === 'quests' && (
            <QuestsPage
              user={userProgress}
              userClass={heroClass}
              skills={skills}
              selectedSkill={selectedSkill}
              onSelectSkill={handleSelectSkill}
              onHoverSkill={handleHoverSkill}
              quests={questsForSelectedSkill}
              recommendedQuest={recommendedQuest}
              totalQuests={INITIAL_QUESTS.length}
              onStartQuest={handleOpenQuestInArena}
              unlockedStage={unlockedStage}
              displayStage={displayStage}
              onPreviewStage={handlePreviewStage}
              accessoryId={userProgress.accessoryId ?? 'spark'}
              onSelectAccessory={handleSelectAccessory}
              companionName={userProgress.companionName}
              completedCount={userProgress.completedQuests.length}
              completedQuizzes={userProgress.completedQuizzes ?? []}
              bondInfo={bondInfo}
              streak={userProgress.streak ?? 0}
              mentorMessage={defaultMentorMessage.text}
              mentorTag={defaultMentorMessage.tag}
              avatarState={avatarState}
              avatarMood={avatarMood}
              theme={theme}
              onPet={handlePet}
              onAskLesson={handleAskLesson}
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
          isFirebaseConfigured={isFirebaseConfigured}
        />
      )}

      {activeGuide && (
        <GuideModal
          guide={activeGuide}
          isStudied={(userProgress.studiedGuides ?? []).includes(activeGuide.id)}
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
