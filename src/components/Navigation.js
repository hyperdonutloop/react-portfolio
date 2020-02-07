import React from 'react';
import { Link } from 'react-router-dom';

//styles
import { Wrapper } from './styles/Navigation-Styles.js'

const Navigation = () => {
  return (
    <Wrapper>
      <div className="navigation">
        <div className="links">
          <Link to="/" className="item">Home</Link>
          <Link to="/about" className="item">About</Link>
          <Link to="/projects" className="item">Projects</Link>
        </div>
        <div class="switch-wrapper">
          <div class="sun"></div>
          <div class="toggle-wrapper">
          <input id="switch" type="checkbox" />
          <label for="switch" id="toggle">Toggle</label>
          </div>
          <div class="moon"></div>
        </div>
      </div>
    </Wrapper>
    
  )
}

export default Navigation;