import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import About from './components/About.js';
import Projects from './components/Projects.js';
import Home from './components/Home';
// import './App.css';
import Navigation from './components/Navigation';



function App() {
  const location = useLocation();

  return (
    <div className="navigation">
      <div className="navigation-sub">
        
        <Navigation />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component ={About} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;