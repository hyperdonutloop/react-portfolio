import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//styles
import { Wrapper } from './styles/Navigation-Styles.js'

// custom hook
import useDarkMode from './hooks/useDarkMode.js';

const Navigation = () => {
  const [darkMode, setDarkMode ] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <Wrapper>
      <div className="navigation">
        <div className="links">
          <Link to="/" className="item" children="Home" />
          <Link to="/about" className="item">About</Link>
          <Link to="/projects" className="item">Projects</Link>
        </div>
        <div className="switch-wrapper">
        {darkMode && <div className="sun-white"></div>}
        {!darkMode && <div className="sun"></div>}
            <div className="dark-mode__toggle">
            
              <div
                input id="switch"
                label="switch"
                id="toggle"
                onClick={toggleMode}
                className={darkMode ? 'toggle toggled' : 'toggle'}
              />
            </div>
            {darkMode && <div className="moon-white"></div>}
            {!darkMode && <div className="moon"></div>}
        </div>
      </div>
    </Wrapper>
    
  )
}

export default Navigation;