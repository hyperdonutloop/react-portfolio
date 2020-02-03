import React from "react"
import me from '../images/me.png'

function Home (props) {
  return (
    <div>
      <p>Hello <span role="img" aria-label="wave">👋🏼</span>.</p>
      <p>I build things using {' '}
        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>,{' '}
        <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">Redux</a>, and {' '}
        <a href="https://nodejs.dev/" target="_blank" rel="noopener noreferrer">Node</a>.
        <br></br>
        Currently learning GraphQl + Apollo.
        <br></br> 
        Drop me an email at <a href="mailto:ryanerenteria@gmail.com" className="email" target="_blank" rel="noopener noreferrer">ryanerenteria@gmail.com</a> and let's make some magic ✨
      </p>
      <div>
        <img src={me} className="logo" alt="logo" />
      </div>
    </div>
  )
}
 
export default Home;