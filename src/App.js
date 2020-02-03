import React from 'react';
import logo from './logo.svg';

import { BrowserRouter, Route, Link } from 'react-router-dom';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Home from './components/Home';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        {/* Setting up routes */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component ={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component ={Contact} />
        

        <div className="navigation">
          <img src={logo} className="logo" alt="Logo Image" />
          <div className="navigation-sub">

            {/* Setting up links */}
            <a href="" className="item">About</a>
            <a href="" className="item">Projects</a>
            <a href="" className="item">Contact</a>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
