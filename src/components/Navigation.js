import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//styles
import { Wrapper } from './styles/Navigation-Styles.js'

const Navigation = () => {
  const [darkMode, setDarkMode ] = useState(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <Wrapper>
      <div className="navigation">
        <div className="links">
          <Link to="/" className="item">Home</Link>
          <Link to="/about" className="item">About</Link>
          <Link to="/projects" className="item">Projects</Link>
        </div>
        <div className="dark-mode__toggle">
          <div
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}
          />
        </div>
      </div>
    </Wrapper>
    
  )
}

export default Navigation;