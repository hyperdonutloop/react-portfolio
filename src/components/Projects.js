import React from "react"
import { Wrapper } from './styles/Project-Styles.js';

// images
import nasa from '../images/nasa.png';
import oneline from '../images/oneline.png';
import todo from '../images/todo.png';
 
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
            <img className="nasa" src={nasa} href="https://nasa-ryan.now.sh/"  />
            
          
            </a>
            <h3>NASA Photo of the Day</h3>
            <p>An app that pulls the APOD from NASA's API. Built using React.</p>
          </div>

          <div className="cards">
            <div className="mockup">
            <img className="nasa" src={oneline} href="https://journal-fe.now.sh/"  />
            </div>
            <a>Another link to project in project Name
            <h3>Project Name</h3>
            <p>brief Description of Project</p>
            <div className="tools-used-text">
              <span className="surrounding-tools">Tool 1</span>
              <span className="surrounding-tools">Tool 2</span>
              <span className="surrounding-tools">Tool 3</span>
            </div>
            </a> 
          </div>
        </div>

        <div className="bottom-row">
          <div className="cards">
            <div className="mockup">
              <a>Link to Project Put Image inside here</a>
            </div>
            <a>Another link to project in project Name
            <h3>Project Name</h3>
            <p>brief Description of Project</p>
            <div className="tools-used-text">
              <span className="surrounding-tools">Tool 1</span>
              <span className="surrounding-tools">Tool 2</span>
              <span className="surrounding-tools">Tool 3</span>
            </div>
            </a> 
          </div>

          <div className="cards">
            <div className="mockup">
              <a>Link to Project Put Image inside here</a>
            </div>
            <a>Another link to project in project Name
            <h3>Project Name</h3>
            <p>brief Description of Project</p>
            <div className="tools-used-text">
              <span className="surrounding-tools">Tool 1</span>
              <span className="surrounding-tools">Tool 2</span>
              <span className="surrounding-tools">Tool 3</span>
            </div>
            </a> 
          </div>
        </div>
        
      </div>
    </div>

    </Wrapper>
  )
}
 
export default Projects;