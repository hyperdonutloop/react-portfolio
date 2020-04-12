import React from "react"
import { Wrapper } from './styles/Project-Styles.js';

// images
import nasa from '../images/nasa.png';
import oneline from '../images/oneline.png';
import todo from '../images/todo.png';
import { Link } from "react-router-dom";
 
function Projects (props) {
  return (
    <Wrapper>
      <div className="main-section">
      <h1>Here are a few things I've built</h1>
        <p>Made with love and dark magic</p>
      <div className="contents">
        <div className="top-row">
          <div className="cards">
            <a href="https://nasa-ryan.now.sh/" target="_blank">
              <img className="img" src={nasa} />
            </a>
            <h3>NASA Photo of the Day</h3>
            <p>An app that pulls the APOD from NASA's API. Built using React.</p>
          </div>

          <div className="cards">
            <a href="https://journal-fe.now.sh/" target="_blank">
              <img className="img" src={oneline} />
            </a>
            <h3>Project Name</h3>
            <p>brief Description of Project</p>
          </div>

        </div>
        <div className="bottom-row">

          <div className="cards">
            <a href="https://todoreact-ryan.now.sh/" target="_blank" >
              <img className="img" src={todo} />
            </a>
            <h3>Project Name</h3>
            <p>brief Description of Project</p>
          </div>

          <div className="cards">
            <a>
              <a>Place VSCODE theme image here</a>
            </a>
            <h3>Project Name</h3>
            <p>brief Description of Project</p>
          </div>
        </div>

      </div>
    </div>

    </Wrapper>
  )
}
 
export default Projects;