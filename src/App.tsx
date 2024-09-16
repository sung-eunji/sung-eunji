import { useState, useRef, useEffect } from 'react';
import i18n from './locales/i18n';
//import { useTranslation } from 'react-i18next';

import Header from './components/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Works from './components/pages/Works';
import Projects from './components/pages/Projects';
import Welcome from './components/pages/Welcome';

import { Route, Routes } from 'react-router-dom';

function App() {
  //  const { t } = useTranslation();

  const [activeLang, setActiveLang] = useState('');
  const [mode, setMode] = useState('light');

  const languageRef = useRef<null | HTMLDivElement>(null);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setActiveLang(lang);
  };

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', mode === 'dark');
  }, [mode]);

  return (
    <div ref={languageRef}>
      <Header
        activeLang={activeLang}
        changeLanguage={changeLanguage}
        toggleMode={toggleMode}
        darkMode={mode}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
