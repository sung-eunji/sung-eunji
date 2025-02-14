import { useState, useRef, useEffect } from 'react';
import i18n from './locales/i18n';
import Header from './components/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Works from './components/pages/Works';
import Projects from './components/pages/Projects';
import ProjectItem from './components/ProjectsItem';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';
import Template from './components/Templete';
//import WorkItem from './components/WorkItem';
import ProjectsinWork from './components/ProjectsinWork';
import WorkCardList from './components/WorkCardList';

function App() {
  const [activeLang, setActiveLang] = useState('en');
  const [mode, setMode] = useState('light');

  const languageRef = useRef<null | HTMLDivElement>(null);
  const location = useLocation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setActiveLang((prevLang) => (prevLang === 'en' ? 'ko' : 'en'));
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
        darkmode={mode}
      />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <Template>
                <Home />
              </Template>
            }
          />
          <Route
            path="/about"
            element={
              <Template>
                <About />
              </Template>
            }
          />
          <Route
            path="/works"
            element={
              <Template>
                <Works />
              </Template>
            }
          />
          <Route
            path="/projects"
            element={
              <Template>
                <Projects />
              </Template>
            }
          />
          <Route
            path="/projects/:id"
            element={
              <Template>
                <ProjectItem />
              </Template>
            }
          />

          <Route
            path="works/:id"
            element={
              <Template>
                <WorkCardList />
              </Template>
            }
          />
          <Route
            path="fitculator/:id"
            element={
              <Template>
                <ProjectsinWork />
              </Template>
            }
          />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;
