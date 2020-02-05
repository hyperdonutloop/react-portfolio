import React from "react"
import me from '../images/me.png'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Frame } from 'framer';

const Wrapper = styled.div`
  .container {
    margin-left: auto;
    margin-right: auto;
    margin-top: 10rem;
    max-width: 1024px;
    width: 100%;
    padding-top: 3rem;
    padding-bottom: 3rem;
    padding: 1rem;
    border: 5px dotted palevioletred;
    display: flex;
    flex-direction: row;

    .main-font {
      margin-top: 4rem;
      margin-bottom: 4rem;
      border: 3px solid red;
      font-size: 2.25rem;
    }


    img {
      max-width: 100%;
      height: auto;
      object-fit: contain;
      padding-left: 2rem;
      padding-right: 2rem;
      margin-top: 2rem;
      
    }

    p {
      font-size: 2.25rem;
    }
    
    a {
      text-decoration: none;
    }
  }
`;




function Home (props) {
  return (
    <Wrapper>
      <section>
        <div className="container">
            <motion.img
              drag 
              dragConstraints={{top: -20, left: -30, right: -30, bottom: -30}} 
              dragElastic={0.4}
              whileHover={{ rotate: 6, scale: 1.05 }} 
              whileTap={{ rotate: 1, scale: 1.05}}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="avatar"
              src={require('../images/me.png')}
              alt="memoji"
            />

            <div className="main-font">
              Hello{' '} 
              <span role="img" aria-label="wave">👋🏼</span>.
              <br />
              I build things using {' '}
                <a
                  whileHover={{ y: -4 }}
                  href="https://reactjs.org/" 
                  target="_blank" 
                  rel="noopener noreferrer">React</a>
                  {/* whileHover={{ y: -8 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  
                  target="_blank" 
                  rel="noopener noreferrer",{' '} */}
              
              <a 
                href="https://redux.js.org/" 
                target="_blank" 
                rel="noopener noreferrer">Redux</a>, and {' '}
              <a 
                href="https://nodejs.dev/" 
                target="_blank" 
                rel="noopener noreferrer">Node</a>.
              <br></br>
              Currently learning GraphQL + Apollo.
              <br></br>

              <div>
                Drop me an <a href="mailto:ryanerenteria@gmail.com" className="email" target="_blank" rel="noopener noreferrer">email</a> and let's make some magic ✨
              </div>
            </div>    
        </div>
      </section>
    </Wrapper>
  )
}
 
export default Home;