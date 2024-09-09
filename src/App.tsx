import { useState, useRef, useEffect } from 'react';
import i18n from './locales/i18n';
import { useTranslation } from 'react-i18next';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Works from './components/Works';
import Projects from './components/Projects';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';

function App() {
  const { t } = useTranslation();

  const [count, setCount] = useState(0);
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
    document.body.className = mode; // 'light' 또는 'dark' 클래스를 body에 적용
  }, [mode]);

  return (
    <div className="bg-red-100" ref={languageRef}>
      <Header
        activeLang={activeLang}
        changeLanguage={changeLanguage}
        toggleMode={toggleMode}
        darkMode={mode}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <h1>{t(`header.ViteandReact`)}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          likes{count}
        </button>
      </div>
      <div className="flex flex-col items-center gap-[1rem] py-[2rem]">
        <Nav />
        <Footer />
      </div>
    </div>
  );
}

export default App;
