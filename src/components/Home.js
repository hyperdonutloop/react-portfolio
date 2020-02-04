import React from "react"
import me from '../images/me.png'
import styled from 'styled-components';

const Wrapper = styled.div`
  .container {
    margin-left: auto;
    margin-right: auto;
    max-width: 1024px;
    width: 100%;
    display: block;
    border: 2px solid pink;

    // .main {
    //   justify-content: center;
    //   align-items: center;
    //   border: 3px solid green;
    //   webkit-box-pack: center;
    // }

    .intro-text {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    img {
      max-width: 100%;
      height: auto;
      object-fit: contain;
      padding-left: 2rem;
      padding-right: 2rem;
      
    }

    p {
      font-size: 2.25rem;
    }
  
  }

  

  

`;

function Home (props) {
  return (
    <Wrapper>
      <div className="container">
        <div className="main">
          <div>
            <div className="intro-text">
              <img src={me} className="avatar" alt="logo" />
              
              <p> Hello <span role="img" aria-label="wave">👋🏼</span>.<br />
                I build things using {' '}
                <a 
                  href="https://reactjs.org/" 
                  target="_blank" 
                  rel="noopener noreferrer">React</a>,{' '}
                <a 
                  href="https://redux.js.org/" 
                  target="_blank" 
                  rel="noopener noreferrer">Redux</a>, and {' '}
                <a 
                  href="https://nodejs.dev/" 
                  target="_blank" 
                  rel="noopener noreferrer">Node</a>.
                <br></br>
                Currently learning GraphQl + Apollo.
                <br></br> 
                Drop me an email at <a href="mailto:ryanerenteria@gmail.com" className="email" target="_blank" rel="noopener noreferrer">ryanerenteria@gmail.com</a> and let's make some magic ✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
 
export default Home;