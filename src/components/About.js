import React from "react"
 
function About (props) {
  return (
    <div>
      <h1>About Me</h1>
      <p>My name is Ryan Renteria and I live in Carlsbad, California.<br></br>My time is currently spent working at Apple and attending <a href="https://lambdaschool.com/" target="_blank" rel="noopener noreferrer">Lambda School</a> for software engineering.<br></br></p>
      <br></br>
      <p>In my free time you can usually find me at the beach with my family. Cookies and chocolate milk are my life force.</p>
      <br></br>
      <h2>Currently Learning:</h2>
      <ul>
        <li>GraphQl</li>
        <li>Apollo</li>
        <li>Prisma</li>
      </ul>
    </div>
  )
}
 
export default About;