import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import BoltWht from '../icons/bolt-wht.js'
import BoltDark from '../icons/bolt-blk.js'

//styles
import { Wrapper } from './styles/Navigation-Styles.js'

// custom hook
import useDarkMode from './hooks/useDarkMode.js';

const pageVariants = {
  initial: {
    opacity: 0,
    // x: "-100vw",
    // scale: 0.8
  },
  in: {
    opacity: 1,
    // x: 0,
    // scale: 1
  },
  out: {
    opacity: 0,
    // x: "100vw",
    // scale: 1.2
  }
};

// const pageTransition = {
//   type: "tween",
//   ease: "anticipate",
//   duration: 0.5
// };

const pageStyle = {
  position: "relative"
};

const Navigation = () => {
  const [darkMode, setDarkMode ] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  const [isExpanded, setIsExpanded] = useState(false);
  // THIS IS FOR COLLAPSING NAV BAR
  // const handleToggle = e => {
  //   e.preventDefault();
  //   setIsExpanded(!isExpanded)
  //   console.log('i was clicked');
    
  // }

  return (
    <Wrapper>
      <motion.div
        style={pageStyle}
        initial='out' 
        animate='in' 
        exit='out' 
        variants={pageVariants} 
        // transition={pageTransition} 
        className="navigation"
      >
        <div className="hap">
          <div className="ryan" id="desktop">
            {darkMode && <NavLink to="/" exact activeClassName="active-wht" className="me-wht"></NavLink>}
            {!darkMode && <NavLink to="/" exact activeClassName="active-drk" className="me-dark"></NavLink>}
          </div>
          
          <div className="ryan" id="mobile">
            {darkMode && <NavLink to="/" exact activeClassName="active-wht" className="me-wht"></NavLink>}
            {!darkMode && <NavLink to="/" exact activeClassName="active-drk" className="me-dark"></NavLink>}
          </div>
          

          <div className="links" id="desktop">
            {/* <span className="icon" onClick={handleToggle}>⚡️</span>
            <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}> */}

            {darkMode && <NavLink to="/" exact activeClassName="active-wht" className="item-wht" children="Home" />}
            {!darkMode && <NavLink to="/" exact activeClassName="active-drk" className="item-drk" children="Home" />}

            {darkMode && <NavLink to="/about" activeClassName="active-wht" className="item-wht">About</NavLink>}
            {!darkMode && <NavLink to="/about" activeClassName="active-drk" className="item-drk">About</NavLink>}

            {darkMode && <NavLink to="/projects" activeClassName="active-wht" className="item-wht">Projects</NavLink>}
            {!darkMode && <NavLink to="/projects" activeClassName="active-drk" className="item-drk">Projects</NavLink>}
            {/* </ul> */}
          </div>
          <div className="links" id="mobile">
            {/* <span className="icon" onClick={handleToggle}>⚡️</span>
            <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}> */}

            {darkMode && <NavLink to="/" exact activeClassName="active-wht" className="item-wht" children="Home" />}
            {!darkMode && <NavLink to="/" exact activeClassName="active-drk" className="item-drk" children="Home" />}

            {darkMode && <NavLink to="/about" activeClassName="active-wht" className="item-wht">About</NavLink>}
            {!darkMode && <NavLink to="/about" activeClassName="active-drk" className="item-drk">About</NavLink>}

            {darkMode && <NavLink to="/projects" activeClassName="active-wht" className="item-wht">Projects</NavLink>}
            {!darkMode && <NavLink to="/projects" activeClassName="active-drk" className="item-drk">Projects</NavLink>}
            {/* </ul> */}

          </div>
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
      </motion.div>
    </Wrapper>
    
  )
}

export default Navigation;