import React from "react"

//styles 
import { Wrapper } from './styles/Contact-Styles.js'

function Contact (props) {
  return (
    <Wrapper>
      <div>
      <div className="main-section">
        <div className="article">
          <p>
            Say Hi <span role="img" aria-label="wave">👋🏼</span><br/>
            Feel free to send me an email at{' '}
            <a 
              href="mailto:ryanerenteria@gmail.com" 
              className="email" 
              target="_blank" 
              rel="noopener noreferrer">ryanerenteria@gmail.com</a>. 
              
          </p>

            <div className="links">
              <h2>Public links</h2>
              <a 
                href="https://github.com/hyperdonutloop" 
                target="_blank" 
                rel="noopener noreferrer" children="Github" 
              />
              <a 
                href="https://twitter.com/hyperdonutloop" 
                target="_blank" 
                rel="noopener noreferrer" children="Twitter" />
            </div>
          
        </div>
      </div>
    </div>
    </Wrapper>
  )
}
 
export default Contact;