import React from 'react';
import { motion } from 'framer-motion';
import me from '../images/me.jpg';

//styles
import { Wrapper } from './styles/About-Styles.js'; 

const theBounceVariants = {
  start: {
    y: "50%"
  },
  end: {
    y: "150%"
  }
};

const theBounce = {
  duration: 0.5,
  yoyo: Infinity,
  // ease: "easeInOut"
}

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
//   type: 'spring',
//   ease: "anticipate",
//   duration: 2
// };

const pageStyle = {
  position: "relative"
};


function About (props) {
  return (
    <Wrapper>
      <motion.div
        style={pageStyle}
        initial='out' 
        animate='in' 
        exit='out' 
        variants={pageVariants} 
        // transition={pageTransition}
      >
        <div className="main-section">
          <div className="article">
            <br />
            <motion.h2 className="about" whileHover={{ y: -8, transition: theBounce }} variants={theBounceVariants}>About Me</motion.h2>
            <div className="top">
              <div className="words">
                <p>Hey! I'm <span className="ryan">Ryan</span>, a software engineering student based in Carlsbad, California. I currently attend Lambda School full-time, and work for Apple part-time. I have worked for Apple for six years, mostly troubleshooting and repairing iOS and MacOS devices. I am currently looking for roles in front-end, back-end, or a combination of both! My motivation to build a great product comes not from the product itself, but how it makes people feel. That is where the true magic is, and that is what inspires me to create something better.</p>
              </div>
              <div className="me">
                <img className="me" src={require('../images/me.jpg')} />
              </div>
            </div>
            <br></br> 
            <motion.h2 className="about" whileHover={{ y: -8, transition: theBounce }} variants={theBounceVariants}>Things I know</motion.h2>

            <div className="skillz">
              <div className="skillz_category">
                <div className="skillz_category_label">LANGUAGES</div>
                <ul>
                  <li className="skillz_category_item">JavaScript (ES6)</li>
                  <li className="skillz_category_item">HTML</li>
                  <li className="skillz_category_item">(S)CSS</li>
                  <li className="skillz_category_item">SQL</li>
                  <li className="skillz_category_item">Python</li>
                </ul>
              </div>

              <div className="skillz_category">
                <div className="skillz_category_label">FRAMEWORKS</div>
                <ul>
                  <li className="skillz_category_item">React</li>
                  <li className="skillz_category_item">Redux</li>
                  <li className="skillz_category_item">Django</li>
                  <li className="skillz_category_item">Styled Components</li>
                  <li className="skillz_category_item">Node</li>
                  <li className="skillz_category_item">Glamorous</li>
                  <li className="skillz_category_item">Framer-Motion</li>
                </ul>
              </div>

              <div className="skillz_category">
                <div className="skillz_category_label">TOOLS</div>
                <ul>
                  <li className="skillz_category_item">Visual Studio Code</li>
                  <li className="skillz_category_item">Insomnia</li>
                  <li className="skillz_category_item">Postman</li>
                  <li className="skillz_category_item">ZEIT</li>
                  <li className="skillz_category_item">Heroku</li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </motion.div>
    </Wrapper>
    
  )
}
 
export default About;