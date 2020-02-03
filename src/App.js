import React from 'react';
import me from './images/me.png';

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
          <div className="navigation-sub">

            {/* Setting up links */}
            <Link to="/" className="item">Home</Link>
            <Link to="/about" className="item">About</Link>
            <Link to="/projects" className="item">Projects</Link>
            <Link to="/contact" className="item">Contact</Link>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
