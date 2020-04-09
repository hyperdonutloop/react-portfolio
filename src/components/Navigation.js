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
        <div className="ryan">
          {darkMode && <Link to="/" className="me-wht">🖇Ryan Renteria</Link>}
          {!darkMode && <Link to="/" className="me-dark">🖇Ryan Renteria</Link>}
          {/* <Link to="/" className="me-wht">🖇Ryan Renteria</Link> */}
        </div>
        <div className="links">
          {darkMode && <Link to="/" className="item-wht" children="Home" />}
          {!darkMode && <Link to="/" className="item-drk" children="Home" />}

          {darkMode && <Link to="/about" className="item-wht">About</Link>}
          {!darkMode && <Link to="/about" className="item-drk">About</Link>}

          {darkMode && <Link to="/projects" className="item-wht">Projects</Link>}
          {!darkMode && <Link to="/projects" className="item-drk">Projects</Link>}
        </div>
        <div className="switch-wrapper">
        {darkMode && <div className="sun-white"></div>}
        {!darkMode && <div className="sun"></div>}
            <div className="dark-mode__toggle">
            
              <div
                // input id="switch"
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