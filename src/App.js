import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Licenses from './pages/Licenses';
import Skills from './pages/Skills';
import Accomplishments from './pages/Accomplishments';
import Cv from './pages/Cv';
import {
  accomplishments, cv, education, experience, licenses, skills,
} from './pages/webData';
import Contribute from './component/Contribute';

const App = () => {
  useEffect(() => {
    setAppWidth();
    clearSession();

    return null;
  }, []);

  const setAppWidth = () => {
    const vh = window.innerHeight * 0.01;

    document.documentElement.style.setProperty('--vh', `${vh}px`);

    return true;
  };

  const clearSession = () => {
    window.onbeforeunload = () => {
      sessionStorage.clear();
    };
  };

  return (
    <Router
      basename={process.env.PUBLIC_URL}
    >
      <div
        className="flex ek-me-general-wrapper font-sans select-none bg-gradient bg-gradient-to-r from-backgroundStart to-backgroundEnd"
      >
        <Route render={({ location }) => (
          <AnimatePresence
            initial
            exitBeforeEnter
            onExitComplete={async () => {
              if (location.pathname !== '/') {
                const isAnimationShowed = sessionStorage.getItem('isHomeAnimationShowed');
                if (!isAnimationShowed) {
                  sessionStorage.setItem('isHomeAnimationShowed', 'SHOWED');
                }
              }
            }}
          >
            <Switch location={location} key={location.pathname}>
              <Route
                exact
                path="/"
                render={() => <Home />}
              />
              <Route
                exact
                path={experience.link}
                render={() => <Experience />}
              />
              <Route
                exact
                path={education.link}
                render={() => <Education />}
              />
              <Route
                exact
                path={licenses.link}
                render={() => <Licenses />}
              />
              <Route
                exact
                path={skills.link}
                render={() => <Skills />}
              />
              <Route
                exact
                path={accomplishments.link}
                render={() => <Accomplishments />}
              />
              <Route
                exact
                path={cv.link}
                render={() => <Cv />}
              />
            </Switch>
          </AnimatePresence>
        )}
        />
        <Contribute />
      </div>
    </Router>
  );
};

export default App;
