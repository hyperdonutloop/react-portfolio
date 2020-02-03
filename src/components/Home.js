import React from "react"
import me from '../images/me.png'

function Home (props) {
  return (
    <div>
      <p>Hello 👋🏼.</p>
      <p>I build things using {' '}
        <a href="https://reactjs.org/" target="_blank">React</a>,{' '}
        <a href="https://redux.js.org/" target="_blank">Redux</a>, and {' '}
        <a href="https://nodejs.dev/" target="_blank">Node</a>.
        <br></br>
        Currently learning GraphQl + Apollo.
        <br></br> 
        Drop me an email at <a href="mailto:ryanerenteria@gmail.com" className="email" target="_blank" >ryanerenteria@gmail.com</a> and let's make some magic ✨
      </p>
      <img src={me} className="logo" alt="Logo Image" />
    </div>
  )
}
 
export default Home;