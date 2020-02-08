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

            <div className="skillz">
              <div className="skillz_category">
                <div className="skillz_category_label">LANGUAGES</div>
                <ul>
                  <li className="skillz_category_item">Javascript(ES6)</li>
                  <li className="skillz_category_item">HTML</li>
                  <li className="skillz_category_item">(S)CSS</li>
                  <li className="skillz_category_item">SQL</li>
                </ul>
              </div>

              <div className="skillz_category">
                <div className="skillz_category_label">FRAMEWORKS</div>
                <ul>
                  <li className="skillz_category_item">React</li>
                  <li className="skillz_category_item">Redux</li>
                  <li className="skillz_category_item">Node</li>
                  <li className="skillz_category_item">Framer-Motion</li>
                  <li className="skillz_category_item">Styled Components</li>
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
                  <li className="skillz_category_item">Git & GitHub</li>
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