import React from "react"
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Wrapper } from './Home-Styles.js';

function Mark({
  className,
  color = 'gray',
  ...props
}: React.Component<'a'>) {
  return (
    <motion.div className="inline-block" whileHover={{ y: -4 }}>
      <a
        {...props}
        rel="noopener noreferrer"
        target="_blank"
      />
    </motion.div>
  )
}

function Home (props) {
  return (
    <Wrapper>
      <section>
        <div className="container">
            <motion.img
              drag 
              dragConstraints={{top: -20, left: -30, right: -30, bottom: -30}} 
              dragElastic={0.4}
              whileHover={{ rotate: 2, scale: 1.05 }} 
              whileTap={{ rotate: 1, scale: 0.9}}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="avatar"
              src={require('../images/me.png')}
              alt="memoji"
            />

            <div>
              <div className="main-font">
                Hello{' '} 
                <span role="img" aria-label="wave">👋🏼</span>.
                <br /> I build things using{' '}
                <a 
                  style={{color: '#A0A4D9'}} 
                  whileHover={{ y: -9 }} 
                  href="https://reactjs.org/" 
                  target="_blank" 
                  rel="noopener noreferrer" children="React" 
                />,{' '}
                <a
                  style={{color: '#A0A4D9'}}
                  href="https://redux.js.org/" 
                  target="_blank" 
                  rel="noopener noreferrer" children="Redux" />, and {' '}
                <a
                  style={{color: '#A0A4D9'}} 
                  href="https://nodejs.dev/" 
                  target="_blank" 
                  rel="noopener noreferrer">Node</a>.
                <br />
                Currently learning GraphQL + Apollo.
                <br></br>
              </div>
              <div>
                Drop me an <a style={{color: '#A0A4D9'}} href="mailto:ryanerenteria@gmail.com" className="email" target="_blank" rel="noopener noreferrer">email</a> and let's make some magic ✨
              </div>
            </div>    
        </div>
      </section>
    </Wrapper>
  )
}
 
export default Home;