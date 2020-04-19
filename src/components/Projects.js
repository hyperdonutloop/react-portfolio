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
            <div className="desc">
              <h3>NASA Photo of the Day</h3>
              <p>This app pulls the Astronomy Picture of the Day from NASA's API. Added a dark mode switch for fun. Uses local storage for dark mode switching.</p>
            </div>
          </div>

          <div className="cards">
            <a href="https://journal-fe.now.sh/" target="_blank">
              <img className="img" src={oneline} />
            </a>
            <div className="desc">
              <h3>One Line A Day</h3>
              <p>Users can log in and start making journal entries. Journal entries can be reviewed, updated, and deleted.</p>
            </div>
          </div>

        </div>
        <div className="bottom-row">

          <div className="cards">
            <a href="https://todoreact-ryan.now.sh/" target="_blank" >
              <img className="img" src={todo} />
            </a>
            <div className="desc">
              <h3>A simple todo list built with React</h3>
              <p>Everyone has to have a todo-list. Aside from crossing things off your list, this web app also has fun reminders of what day it is.</p>
            </div>
          </div>

          <div className="cards">
            <a href="https://marketplace.visualstudio.com/items?itemName=ryan-renteria.superhuman" target="_blank" >
              <img className="img" src={theme} />
            </a>
            <div className="desc">
              <h3>Superhuman VS Code theme</h3>
              <p>I am a huge fan of Superhuman, especially their version of Dark Mode (called Carbon). This theme brings the colors of Superhuman to your workspace.</p>
            </div>
          </div>
        </div>

      </div>
    </div>

    </Wrapper>
  )
}
 
export default Projects;