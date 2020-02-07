import React from 'react';
import { motion } from 'framer-motion';

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

function About (props) {
  return (
    <Wrapper>
      <div>
        <div className="main-section">
          <div className="article">
            <motion.h1 className="about" whileHover={{ y: -8, transition: theBounce }} variants={theBounceVariants}>About Me</motion.h1>
            <br />
            <h2>Who I am</h2>
            <p>My name is Ryan Renteria. I am a husband to a Princess and father to three wild beasts, Odin,     Mordecai, and Hyperion. My role models include, Elon Musk, Tony Stark, and Albus Dumbledore. Hanging out with my family, playing at the beach, and watching movies are a few of the things I enjoy. You can usually find me with cookies and chocolate milk. <br></br></p>
            <br></br> 
            <h2>What I do</h2>
            <p>I currently attend <a href="https://lambdaschool.com/" target="_blank" rel="noopener noreferrer">Lambda School</a> while working part-time at Apple as a Mac Genius. Lambda School is a 9 month software engineering program that provides an immersive hands-on curriculum with a focus on computer science and full stack web development. While my main focus is programming, taking photos and making Youtube videos is one of my creative outlets.</p>
            <br></br>
            <h2>Things I know</h2>

            <div className="things">
              <div className="sections">
                <h5>Front End</h5>
                <ul>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Styled Components</li>
                  <li>Glamorous</li>
                  <li>Framer-Motion</li>
                  <li>Less CSS</li>
                </ul>
              </div>

              <div className="sections">
                <h5>Backend</h5>
                <ul>
                  <li>NodeJS</li>
                  <li>Express</li>
                  <li>SQLite</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>

              <div className="sections">
                <h5>Deployment</h5>
                <ul>
                  <li>ZEIT now</li>
                  <li>Heroku</li>
                  <li>Netlify</li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </div>
    </Wrapper>
    
  )
}
 
export default About;