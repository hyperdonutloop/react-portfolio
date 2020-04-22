import React from "react"
import { Wrapper } from './styles/Project-Styles.js';
import useDarkMode from './hooks/useDarkMode.js';
import { motion } from 'framer-motion';

// images
import nasa from '../images/nasa.png';
import oneline from '../images/oneline.png';
import todo from '../images/todo.png';
import theme from '../images/theme.png'

const pageTransitions = {
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
};

 
function Projects (props) {
  const [darkMode, setDarkMode ] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };


  return (
    <Wrapper>
      <motion.div initial='out' animate='in' exit='out' variants={pageTransitions} className="main-section">
        <div className="header">
          {/* <h1>Here are a few things I've built</h1> */}
        </div>
      <div className="contents">
        <div className="top-row">
          <div className="cards">
          <h5> 🛰&nbsp;NASA Photo of the Day</h5>
            <a href="https://nasa-ryan.now.sh/" target="_blank">
              <img className="img" src={nasa} />
            </a>
            

            <div className="desc">
              <p>Discover the cosmos! Every day a different image or photograph of our universe is featured, along with a brief explanation written by an astronomer. Added in a custom hook that lets you view the app in dark mode.</p>
            </div>
            <ul className="tools-list">
              <li>React</li>
              <li>NASA Web API</li>
              <li>
                <a className="source" href="https://github.com/hyperdonutloop/nasa-photo-of-the-day" target="_blank">Source Code</a>
              </li>
            </ul>
          </div>

          <div className="cards">
          <h5> 📖&nbsp;One Line A Day</h5>
            <a href="https://journal-fe.now.sh/" target="_blank">
              <img className="img" src={oneline} />
            </a>
            
            <div className="desc">
              <p>The One Line a Day Platform is an easy to use journaling app. Users can log in and start making journal entries. Journal entries can be reviewed, updated, and deleted. Use it to record special memories, or as an everyday journal.</p>
            </div>
            <ul className="tools-list">
              <li>React</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>
                <a className="source" href="https://github.com/hyperdonutloop/journal-fe" target="_blank">Source Code</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="bottom-row">

          <div className="cards">
          <h5> 📝&nbsp;Things</h5>
            <a href="https://todoreact-ryan.now.sh/" target="_blank" >
              <img className="img" src={todo} />
            </a>
            
            <div className="desc">
              <p>Everyone has to have a todo-list. Aside from crossing things off your list, this web app also has fun reminders of what day it is.</p>
            </div>
            <ul className="tools-list">
              <li>React</li>
              <li>Redux</li>
              <li>
                <a className="source" href="https://github.com/hyperdonutloop/reducer-todo" target="_blank">Source Code</a>
              </li>
            </ul>
          </div>

          <div className="cards">
          <h5>⚡&nbsp;Superhuman VS Code theme</h5>
            <a href="https://marketplace.visualstudio.com/items?itemName=ryan-renteria.superhuman" target="_blank" >
              <img className="img" src={theme} />
            </a>
            
            <div className="desc">
              <p>Superhuman is amazing, especially their version of Dark Mode, called Carbon. This theme brings the colors of Superhuman to your workspace.</p>
            </div>
            <ul className="tools-list">
              <li>
                <a className="source" href="https://github.com/hyperdonutloop/superhuman-theme" target="_blank">Source Code</a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </motion.div>

    </Wrapper>
  )
}
 
export default Projects;