import React from "react"
import { Wrapper } from './styles/Project-Styles.js';

// images
import nasa from '../images/nasa.png';
import oneline from '../images/oneline.png';
import todo from '../images/todo.png';
import theme from '../images/theme.png'

 
function Projects (props) {
  return (
    <Wrapper>
      <div className="main-section">
        <div className="header">
          <h1>Here are a few things I've built</h1>
          <p>Made with love and dark magic</p>
        </div>
      <div className="contents">
        <div className="top-row">
          <div className="cards">
            <a href="https://nasa-ryan.now.sh/" target="_blank">
              <img className="img" src={nasa} />
            </a>
            <h5>NASA Photo of the Day</h5>
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
            <a href="https://journal-fe.now.sh/" target="_blank">
              <img className="img" src={oneline} />
            </a>
            <h5>One Line A Day</h5>
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
            <a href="https://todoreact-ryan.now.sh/" target="_blank" >
              <img className="img" src={todo} />
            </a>
            <h5>A simple todo list built with React</h5>
            <div className="desc">
              <p>Everyone has to have a todo-list. Aside from crossing things off your list, this web app also has fun reminders of what day it is.</p>
            </div>
            <ul className="tools-list">
              <li>React</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>
                <a className="source" href="https://github.com/hyperdonutloop/reducer-todo" target="_blank">Source Code</a>
              </li>
            </ul>
          </div>

          <div className="cards">
            <a href="https://marketplace.visualstudio.com/items?itemName=ryan-renteria.superhuman" target="_blank" >
              <img className="img" src={theme} />
            </a>
            <h5>Superhuman VS Code theme</h5>
            <div className="desc">
              <p>Superhuman is amazing, especially their version of Dark Mode, called Carbon. This theme brings the colors of Superhuman to your workspace.</p>
            </div>
            <ul className="tools-list">
              <li>React</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>
                <a className="source" href="https://github.com/hyperdonutloop/superhuman-theme" target="_blank">Source Code</a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>

    </Wrapper>
  )
}
 
export default Projects;