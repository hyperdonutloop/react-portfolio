import React from 'react';

import { Route } from 'react-router-dom';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Home from './components/Home';
// import './App.css';
import Navigation from './components/Navigation';


function App() {
  return (
    <div className="navigation">
      <div className="navigation-sub">
        <Navigation />
          <Route exact path="/" component={Home} />
          <Route path="/about" component ={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component ={Contact} />
      </div>
    </div>
  );
}

export default App;