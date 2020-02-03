import React from "react"
 
function Contact (props) {
  return (
    <div>
      <h1>Say Hi <span role="img" aria-label="wave">👋🏼</span></h1>
      <p>
        Feel free to send me an email at {' '}
        <a href="mailto:ryanerenteria@gmail.com" className="email" target="_blank" rel="noopener noreferrer" >ryanerenteria@gmail.com</a>
        <h2>Public links here:</h2>
        <a href="https://github.com/hyperdonutloop" target="_blank" rel="noopener noreferrer">Github</a>
        <a href="https://twitter.com/hyperdonutloop" target="_blank" rel="noopener noreferrer">Twitter</a>
      </p>
    </div>
  )
}
 
export default Contact;