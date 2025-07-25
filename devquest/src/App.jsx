import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { auth, db } from './firebase/config';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged,
  signOut 
} from "firebase/auth";
import { doc, setDoc, onSnapshot, updateDoc } from "firebase/firestore";

// Importe todos os seus componentes e páginas
import Header from './components/Header';
import QuestsPage from './pages/QuestsPage';
import GuidesPage from './pages/GuidesPage';
import CharacterPage from './pages/CharacterPage';
import AuthModal from './components/modals/AuthModal';
import ChallengeModal from './components/modals/ChallengeModal';
import LevelUpModal from './components/modals/LevelUpModal';
import MascotEvolutionModal from './components/modals/MascotEvolutionModal';
import GuideModal from './components/modals/GuideModal';
import { Code, Palette, Server, Database, Wind, Shield } from 'lucide-react';
import mascot1Icon from `./assets/tyrunt.png`;
import macot2Icon from `./assets/tyrantrum.png`;
import mascot3Icon from `./assets/wizardTyrantrum.png`;

const initialAvatars = [
    { id: 'avatar1', url: 'https://i.pinimg.com/736x/ce/5a/2e/ce5a2e6db10c43ba0f3b4381dbe9de23.jpg' }, // Warrior
    { id: 'avatar2', url: 'https://i.pinimg.com/736x/2f/25/07/2f25074d2a6db23d675596cb701f10c2.jpg' }, // Mage
    { id: 'avatar3', url: 'https://i.pinimg.com/736x/dd/18/a2/dd18a2387bd7806d90f494b294844570.jpg' }, // Ranger
    { id: 'avatar4', url: 'https://i.pinimg.com/736x/f8/ac/38/f8ac38d8c48e9b23d0acf8f4fa48fef6.jpg' }, // Necromancer
    { id: 'avatar5', url: 'https://i.pinimg.com/736x/fb/27/3f/fb273f6ef25d231d05870f6aac7c04f4.jpg' }, // Druid
    { id: 'avatar6', url: 'https://i.pinimg.com/736x/75/c6/15/75c615115d305891d9cf541bea9ec1bd.jpg' }, // Bard
];

const initialSkillsData = [
  { id: 'html', name: 'HTML5', description: 'The foundational language for structuring web content.', dependencies: [], status: 'available', position: { row: 2, col: 1 }, category: 'structure', color: 'text-orange-400', icon: <Code /> },
  { id: 'css', name: 'CSS3', description: 'The language for styling and designing web pages.', dependencies: ['html'], status: 'locked', position: { row: 2, col: 2 }, category: 'styling', color: 'text-blue-400', icon: <Palette /> },
  { id: 'js', name: 'JavaScript ES6+', description: 'The core programming language of the web.', dependencies: ['html'], status: 'locked', position: { row: 2, col: 3 }, category: 'logic', color: 'text-yellow-400', icon: <Code /> },
  { id: 'tailwind', name: 'Tailwind CSS', description: 'A utility-first CSS framework for rapid UI development.', dependencies: ['css'], status: 'locked', position: { row: 3, col: 2 }, category: 'styling', color: 'text-teal-400', icon: <Wind /> },
  { id: 'react', name: 'React', description: 'A JavaScript library for building user interfaces.', dependencies: ['js'], status: 'locked', position: { row: 3, col: 3 }, category: 'logic', color: 'text-cyan-400', icon: <Code /> },
  { id: 'nodejs', name: 'Node.js', description: 'A JavaScript runtime for building server-side applications.', dependencies: ['js'], status: 'locked', position: { row: 1, col: 4 }, category: 'backend', color: 'text-green-400', icon: <Server /> },
  { id: 'express', name: 'Express.js', description: 'A minimal and flexible Node.js web application framework.', dependencies: ['nodejs'], status: 'locked', position: { row: 2, col: 4 }, category: 'backend', color: 'text-gray-400', icon: <Server /> },
  { id: 'sql', name: 'SQL Databases', description: 'Mastering relational databases like PostgreSQL.', dependencies: ['nodejs'], status: 'locked', position: { row: 3, col: 4 }, category: 'database', color: 'text-indigo-400', icon: <Database /> },
  { id: 'mastery-fullstack', name: 'Full-Stack Mastery', description: 'Combine frontend and backend skills to build a complete application.', dependencies: ['react', 'express', 'sql'], status: 'locked', position: { row: 4, col: 3 }, category: 'mastery', color: 'text-purple-400', icon: <Shield /> },
];

const initialQuestsData = [
  // HTML
  { id: 'q1', skillId: 'html', title: 'Create a page title', xp: 20, completed: false, challenge: 'The <h1> tag should contain the text "Welcome to DevQuest".', starterCode: `<h1></h1>`, solution: (code) => code.toLowerCase().includes('welcome to devquest') && code.includes('h1') },
  { id: 'q2', skillId: 'html', title: 'Create a Link', xp: 25, completed: false, challenge: 'Create an anchor tag <a> that links to "https://www.google.com".', starterCode: `<a>Google</a>`, solution: (code) => code.includes('href') && (code.includes('"https://www.google.com"') || code.includes("'https://www.google.com'")) },
  { id: 'q3', skillId: 'html', title: 'Display an Image', xp: 30, completed: false, challenge: 'Use an <img> tag with a `src` attribute. The `alt` text should be "A brave adventurer".', starterCode: `<img src="" alt="">`, solution: (code) => code.includes('src=') && code.toLowerCase().includes('alt="a brave adventurer"')},
  { id: 'boss-html', skillId: 'html', title: 'Boss: Build a Hero Section', isBossFight: true, xp: 80, completed: false, challenge: 'Create a <section> containing an <h1>, a <p>, and a <button>. All three must be present.', starterCode: `<section>\n  \n</section>`, solution: (code) => code.includes('<section') && code.includes('<h1') && code.includes('<p') && code.includes('<button') },
  
  // CSS
  { id: 'q4', skillId: 'css', title: 'Change Text Color', xp: 20, completed: false, challenge: 'Write a CSS rule to make all <p> tags have the color "blue".', starterCode: `p {\n  \n}`, solution: (code) => code.replace(/\s/g, '').includes('color:blue') },
  { id: 'q17', skillId: 'css', title: 'Keyframe Animation', xp: 35, completed: false, challenge: 'Create a @keyframes animation named "fade-in" that goes from opacity 0 to 1.', starterCode: `@keyframes fade-in {\n  \n}`, solution: (code) => code.includes('from { opacity: 0') && code.includes('to { opacity: 1') },
  { id: 'boss-css', skillId: 'css', title: 'Boss: Center with Flexbox', isBossFight: true, xp: 80, completed: false, challenge: 'Make the ".boss-lair" a flex container that centers its children both vertically and horizontally.', starterCode: `.boss-lair {\n  height: 100vh;\n}`, solution: (code) => code.includes('display: flex') && code.includes('justify-content: center') && code.includes('align-items: center') },

  // JS
  { id: 'q7', skillId: 'js', title: 'Declare a variable', xp: 20, completed: false, challenge: 'Declare a variable (const, let, or var) named "hero" and assign it any string value.', starterCode: `// Your code here`, solution: (code) => { try { const func = new Function(`${code}; return hero;`); return typeof func() === 'string'; } catch { return false; } } },
  { id: 'q18', skillId: 'js', title: 'Filter an Array', xp: 35, completed: false, challenge: 'Given `const arr = [1, 2, 3, 4, 5]`, create a new array containing only numbers greater than 2.', starterCode: `const arr = [1, 2, 3, 4, 5];\nconst newArr = arr.filter(); // Complete the filter`, solution: (code) => { try { const getResult = new Function(`${code}; return newArr;`); const res = getResult(); return Array.isArray(res) && res.length === 3 && res.includes(3) && res.includes(4) && res.includes(5); } catch { return false; } } },
  { id: 'boss-js', skillId: 'js', title: 'Boss: Async Fetch', isBossFight: true, xp: 90, completed: false, challenge: 'Write an async function "getQuestData" that uses fetch to get data from "https://api.devquest.com/quests". It should return the JSON response.', starterCode: `async function getQuestData() {\n  \n}`, solution: (code) => code.includes('async function') && code.includes('fetch') && code.includes('https://api.devquest.com/quests') && code.includes('await') && code.includes('.json()') },
  
  // Tailwind
  { id: 'q5', skillId: 'tailwind', title: 'Flexbox with Tailwind', xp: 40, completed: false, challenge: 'Use Tailwind classes on the div to center the <p> tag inside it.', starterCode: `<div class="">\n  <p>Center me</p>\n</div>`, solution: (code) => code.includes('flex') && code.includes('justify-center') && code.includes('items-center') },
  
  // React
  { id: 'q10', skillId: 'react', title: 'Pass Props', xp: 50, completed: false, challenge: 'Pass a "name" prop with the value "Enzo" to the Hero component.', starterCode: `<Hero />`, solution: (code) => code.includes('name="Enzo"') || code.includes("name={'Enzo'}") },
  
  // Express
  { id: 'q19', skillId: 'express', title: 'Handle POST Request', xp: 60, completed: false, challenge: 'Add a POST route at "/users" that sends back the "name" from the request body.', starterCode: `app.use(express.json());\n\n// Your code here`, solution: (code) => code.includes(`app.post('/users'`) && code.includes('req.body.name') },
  
  // SQL
  { id: 'q20', skillId: 'sql', title: 'Join Two Tables', xp: 70, completed: false, challenge: 'Select the user\'s name and post title by joining "users" and "posts" on "users.id = posts.user_id".', starterCode: `SELECT u.name, p.title\nFROM users u\n...`, solution: (code) => code.toLowerCase().includes('join posts p on u.id = p.user_id') },
  
  // Mastery
  { id: 'boss-fullstack', skillId: 'mastery-fullstack', title: 'Final Boss: The Monolith', isBossFight: true, xp: 500, completed: false, challenge: 'This is the ultimate test. Write a conceptual plan in comments for a full MERN stack application (MongoDB, Express, React, Node.js) that has user authentication.', starterCode: `// 1. Backend (Node/Express): User model, auth routes (register/login), JWT generation.\n// 2. React Frontend: ...`, solution: (code) => code.toLowerCase().includes('react') && code.toLowerCase().includes('express') && code.toLowerCase().includes('mongodb') && code.toLowerCase().includes('jwt') && code.toLowerCase().includes('route') },
];

const mascotGifs = {
  1: mascot1Icon, 
  2: macot2Icon, 
  3: mascot3Icon, 
};

const initialGuidesData = [
    { id: 'async', title: 'Grimoire of Asynchronicity', description: 'Unravel the mysteries of Promises, async/await, and the event loop.', content: [ { type: 'h3', text: 'The Event Loop' }, { type: 'p', text: 'JavaScript has a single-threaded concurrency model, meaning it can only do one thing at a time. The Event Loop is what allows JavaScript to perform non-blocking operations. When an async operation (like a fetch request) is initiated, it\'s handed off to the browser. Once it completes, it places a message in a queue, and the Event Loop picks it up when the main thread is free.' }, { type: 'h3', text: 'Promises' }, { type: 'p', text: 'A Promise is an object representing the eventual completion (or failure) of an asynchronous operation. It can be in one of three states: pending, fulfilled, or rejected.' }, { type: 'code', text: `const myPromise = new Promise((resolve, reject) => {\n  // Async operation here\n  if (/* success */) {\n    resolve('Success!');\n  } else {\n    reject('Failure!');\n  }\n});\n\nmyPromise.then(result => ...).catch(error => ...);` }, { type: 'h3', text: 'Async/Await' }, { type: 'p', text: 'Async/await is syntactic sugar built on top of Promises, making asynchronous code look and behave more like synchronous code. This makes it much easier to read and write.' }, { type: 'code', text: `async function getData() {\n  try {\n    const response = await fetch('...');\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.error('Fetch error:', error);\n  }\n}` }, ] },
    { id: 'flexbox', title: 'The Flexbox Codex', description: 'Master the ancient art of aligning items in one dimension.', content: [ { type: 'h3', text: 'The Container' }, { type: 'p', text: 'To start using Flexbox, you need a container element. The magic begins when you set its display property to `flex` or `inline-flex`.' }, { type: 'code', text: `.container {\n  display: flex;\n}` }, { type: 'h3', text: 'Main Axis & Cross Axis' }, { type: 'p', text: '`justify-content` aligns items along the main axis (horizontally by default), while `align-items` aligns them along the cross axis (vertically by default).'}, { type: 'code', text: `.container {\n  display: flex;\n  justify-content: center; /* Main axis */\n  align-items: center;    /* Cross axis */\n}` }, ] },
    { id: 'dom', title: 'Scroll of the DOM', description: 'Learn to manipulate the very structure of the web page itself.', content: [ { type: 'h3', text: 'What is the DOM?' }, { type: 'p', text: 'The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can connect to the page.'}, { type: 'h3', text: 'Selecting Elements' }, { type: 'p', text: 'You can select elements to manipulate using various methods:'}, { type: 'code', text: `// Select by ID\nconst title = document.getElementById('main-title');\n\n// Select by class name (returns a collection)\nconst buttons = document.getElementsByClassName('cta-button');\n\n// The modern way: CSS selectors\nconst firstButton = document.querySelector('.cta-button');\nconst allButtons = document.querySelectorAll('.cta-button');` } ]},
    { id: 'hooks', title: 'React Hooks Runic Circle', description: 'Channel the power of state and effects in functional components.', content: [ { type: 'h3', text: 'useState' }, { type: 'p', text: 'The `useState` hook is the most common hook. It lets you add React state to function components. It returns a pair: the current state value and a function that lets you update it.'}, { type: 'code', text: `const [count, setCount] = useState(0);` }, { type: 'h3', text: 'useEffect' }, { type: 'p', text: 'The `useEffect` hook lets you perform side effects in function components. Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects. It runs after every render by default, but you can control when it runs by passing a dependency array.'}, { type: 'code', text: `useEffect(() => {\n  // Runs after every render\n  document.title = \`You clicked \${count} times\`;\n}, [count]); // Only re-run if count changes` } ]},
];

export default function App() {
  const [skills, setSkills] = useState(initialSkillsData);
  const [quests, setQuests] = useState(initialQuestsData);
  
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [activePage, setActivePage] = useState('quests');
  const [activeChallenge, setActiveChallenge] = useState(null);
  const [activeGuide, setActiveGuide] = useState(null);
  
  const [userProgress, setUserProgress] = useState(null); 
  const [currentUser, setCurrentUser] = useState(null);
  const [userAvatar, setUserAvatar] = useState(initialAvatars[0].url);
  const [mascotStage, setMascotStage] = useState(1);
  const [userClass, setUserClass] = useState('Novice');
  
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [levelUpInfo, setLevelUpInfo] = useState(null);
  const [evolutionInfo, setEvolutionInfo] = useState(null);
  
  useEffect(() => {
    let unsubscribeFromFirestore = () => {};
    const unsubscribeFromAuth = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        setCurrentUser(userAuth);
        setShowAuthModal(false);
        const userDocRef = doc(db, "users", userAuth.uid);
        unsubscribeFromFirestore = onSnapshot(userDocRef, (doc) => {
          if (doc.exists()) {
            const userDataFromDb = doc.data();
            setUserProgress(userDataFromDb);
            setUserAvatar(userDataFromDb.avatarUrl);
            setMascotStage(userDataFromDb.mascotStage);
            setQuests(prevQuests => 
              prevQuests.map(q => ({
                ...q,
                completed: userDataFromDb.completedQuests.includes(q.id)
              }))
            );
          } else {
             console.log("Documento do usuário não encontrado, aguardando criação...");
          }
        });
      } else {
        setCurrentUser(null);
        setShowAuthModal(true);
        setUserProgress(null); 
        if (unsubscribeFromFirestore) unsubscribeFromFirestore();
      }
    });
    return () => {
      unsubscribeFromAuth();
      unsubscribeFromFirestore();
    };
  }, []);

  useEffect(() => {
    if (!userProgress) return; 

    const completedSkills = skills.filter(s => 
        initialQuestsData
            .filter(q => q.skillId === s.id)
            .every(q => userProgress.completedQuests.includes(q.id))
    );

    const completedCategories = new Set(completedSkills.map(s => s.category));
    let newClass = 'Novice';
    if (completedCategories.has('mastery')) { newClass = 'Grandmaster'; } 
    else if (completedCategories.has('logic') && completedCategories.has('backend')) { newClass = 'Full-Stack Paladin'; } 
    else if (completedCategories.has('logic')) { newClass = 'Code Sorcerer'; } 
    else if (completedCategories.has('styling')) { newClass = 'UI Artisan'; } 
    else if (completedCategories.has('backend')) { newClass = 'Data Engineer'; }
    setUserClass(newClass);

    const completedSkillIds = new Set(completedSkills.map(s => s.id));
    const newSkills = skills.map(skill => {
      const isCompleted = completedSkillIds.has(skill.id);
      if (isCompleted) return { ...skill, status: 'completed' };
      
      const dependenciesMet = skill.dependencies.every(depId => completedSkillIds.has(depId));
      const newStatus = dependenciesMet ? 'available' : 'locked';
      return { ...skill, status: newStatus };
    });
    setSkills(newSkills);
  }, [userProgress, skills]); 

  useEffect(() => {
    const faviconHref = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🛡️</text></svg>`;
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/svg+xml'; link.rel = 'shortcut icon'; link.href = faviconHref;
    document.getElementsByTagName('head')[0].appendChild(link);
  }, []);


  const handleSignUp = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const newUser = userCredential.user;
      await setDoc(doc(db, "users", newUser.uid), {
        name: email.split('@')[0], // Nome padrão
        level: 1, currentXp: 0, nextLevelXp: 100,
        avatarUrl: initialAvatars[0].url, completedQuests: [], mascotStage: 1,
      });
    } catch (error) { alert(error.message); }
  };

  const handleLogin = async (email, password) => {
    try { await signInWithEmailAndPassword(auth, email, password); } 
    catch (error) { alert(error.message); }
  };

  const handleLogout = async () => {
    try { await signOut(auth); } 
    catch (error) { alert(error.message); }
  };

  const handleCompleteQuest = useCallback(async (questId) => {
    if (!currentUser || !userProgress) return;
    if (userProgress.completedQuests.includes(questId)) return;

    const userDocRef = doc(db, "users", currentUser.uid);
    const quest = initialQuestsData.find(q => q.id === questId);
    if (!quest) return;
    
    const newCompletedQuests = [...userProgress.completedQuests, questId];
    let newXp = userProgress.currentXp + quest.xp;
    let newLevel = userProgress.level;
    let newNextLevelXp = userProgress.nextLevelXp;
    
    if (newXp >= newNextLevelXp) {
      const oldLevel = userProgress.level;
      newXp -= newNextLevelXp;
      newLevel += 1;
      newNextLevelXp = Math.floor(newNextLevelXp * 1.5);
      setTimeout(() => setLevelUpInfo({ newLevel, oldLevel }), 100);
    }
    
    await updateDoc(userDocRef, {
      completedQuests: newCompletedQuests,
      currentXp: newXp,
      level: newLevel,
      nextLevelXp: newNextLevelXp,
    });
  }, [currentUser, userProgress]);

  const handleCloseLevelUp = async () => {
    if (!levelUpInfo || !currentUser) return;
    const { oldLevel, newLevel } = levelUpInfo;
    setLevelUpInfo(null);
    const evolutionThresholds = { 2: 5, 3: 10 };
    for (const stage in evolutionThresholds) {
        if (oldLevel < evolutionThresholds[stage] && newLevel >= evolutionThresholds[stage]) {
            const newStage = Number(stage);
            setTimeout(() => setEvolutionInfo({ newStage }), 100);
            const userDocRef = doc(db, "users", currentUser.uid);
            await updateDoc(userDocRef, { mascotStage: newStage });
            break; 
        }
    }
  };
  
  const handleAvatarSelect = async (avatarUrl) => {
    if (!currentUser) return;
    setUserAvatar(avatarUrl);
    const userDocRef = doc(db, "users", currentUser.uid);
    await updateDoc(userDocRef, { avatarUrl });
  };

  const questsForSelectedSkill = selectedSkill ? quests.filter(q => q.skillId === selectedSkill.id) : [];

  return (
    <div className="bg-sky-night min-h-screen text-white/90 font-poppins p-2 sm:p-4 relative overflow-hidden" style={{width: `100vw`}}>
        <div id="stars"></div><div id="stars2"></div><div id="stars3"></div>
        <div className="absolute inset-0 bg-radial-vignette pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Poppins:wght@400;600;700&display=swap');
        body { font-family: 'Poppins', sans-serif; overflow-x: hidden; }
        .font-cinzel { font-family: 'Cinzel Decorative', cursive; }
        .bg-sky-night { background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%); }
        .bg-parchment-dark { background-color: #2a241c; background-image: linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px); background-size: 20px 20px; }
        .bg-boss-lair { background-color: #2d1a1a; background-image: linear-gradient(rgba(255,100,100,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,100,100,0.05) 1px, transparent 1px); background-size: 25px 25px; }
        .bg-radial-vignette { background: radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.7) 100%); }
        @keyframes move-twink-back { from {background-position:0 0;} to {background-position:-10000px 5000px;} }
        #stars, #stars2, #stars3 { position: absolute; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%; display: block; z-index: 0; }
        #stars { background: transparent url(https://www.script-tutorials.com/demos/360/images/stars.png) repeat top center; animation: move-twink-back 200s linear infinite; }
        #stars2 { background: transparent url(https://www.script-tutorials.com/demos/360/images/twinkling.png) repeat top center; animation: move-twink-back 150s linear infinite; }
        #stars3 { background: transparent url(https://www.script-tutorials.com/demos/360/images/clouds.png) repeat top center; animation: move-twink-back 100s linear infinite; }
        .animate-fade-in { animation: fadeIn 0.3s ease-out; } .animate-shake { animation: shake 0.5s ease-in-out; } .animate-pulse-fast { animation: pulse 1s infinite; } .animate-spin-slow { animation: spin 10s linear infinite; } .animate-float { animation: float 6s ease-in-out infinite; } .animate-wing-flap { animation: wingFlap 1s ease-in-out infinite alternate; }
        @keyframes fadeIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        @keyframes shake { 0%, 100% { transform: translateX(0); } 10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); } 20%, 40%, 60%, 80% { transform: translateX(5px); } }
        @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { translateY(0px); } }
        @keyframes wingFlap { from { transform: scale(1); } to { transform: scale(1.05); } }
      `}</style>
      
      {showAuthModal && !currentUser && <AuthModal onClose={() => setShowAuthModal(false)} onSignUp={handleSignUp} onLogin={handleLogin} />}
      {activeChallenge && <ChallengeModal quest={activeChallenge} onClose={() => setActiveChallenge(null)} onComplete={handleCompleteQuest} />}
      {levelUpInfo && <LevelUpModal newLevel={levelUpInfo.newLevel} onClose={handleCloseLevelUp} />}
      {evolutionInfo && <MascotEvolutionModal newStage={evolutionInfo.newStage} onClose={() => setEvolutionInfo(null)} mascotGifs={mascotGifs} />}
      {activeGuide && <GuideModal guide={activeGuide} onClose={() => setActiveGuide(null)} />}

      <div className="max-w-7xl mx-auto relative z-10">
        {currentUser && userProgress && <Header user={userProgress} userClass={userClass} userAvatar={userAvatar} onNavClick={setActivePage} activePage={activePage} />}
        <main>
            {currentUser && userProgress ? (
              <>
                {activePage === 'quests' && <QuestsPage skills={skills} selectedSkill={selectedSkill} onSelectSkill={setSelectedSkill} quests={questsForSelectedSkill} onStartQuest={setActiveChallenge} mascotStage={mascotStage} mascotGifs={mascotGifs} />}
                {activePage === 'guides' && <GuidesPage onOpenGuide={setActiveGuide} guides={initialGuidesData} />}
                {activePage === 'character' && <CharacterPage user={userProgress} userClass={userClass} avatars={initialAvatars} selectedAvatar={userAvatar} onAvatarSelect={handleAvatarSelect} onLogout={handleLogout} />}
              </>
            ) : (
              <div className="text-center mt-20 p-4">
                <h2 className="text-3xl font-cinzel text-amber-300">Aguardando um Herói...</h2>
                <p className="text-amber-100/80 mt-2">Carregando o reino ou aguardando autenticação...</p>
              </div>
            )}
        </main>
      </div>
    </div>
  );
}