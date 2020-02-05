import React from "react"
import styled from 'styled-components';
import { motion } from 'framer-motion';

// styled components
import { Wrapper } from './Home-Styles.js';

// function Mark({
//   className,
//   color = 'gray',
//   ...props
// }: React.ComponentProps<'a'>) {
//   return (
//     <motion.div className="inline-block" whileHover={{ y: -4 }}>
//       <a
//         {...props}
//         rel="noopener noreferrer"
//         target="_blank"
//       />
//     </motion.div>
//   )
// }

function Home (props) {
  const [ day, setDay ] = React.useState('day')

  React.useEffect(() => {
    const days = 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'
    setDay(days.split(' ')[new Date().getDay()])
  }, [])
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
                <br />I build things using{' '}
                <motion.div className="inline-block" whileHover={{ y: -4 }}
                 
                 
      
                  href="https://reactjs.org/" 
                  target="_blank" 
                  rel="noopener noreferrer" children="React">
                </motion.div>
                  ,{' '}
                <a
                  href="https://redux.js.org/" 
                  target="_blank" 
                  rel="noopener noreferrer" children="Redux" />, and {' '}
                <a
                  href="https://nodejs.dev/" 
                  target="_blank" 
                  rel="noopener noreferrer">Node</a>.
                <br />
                Currently learning GraphQL + Apollo.<br /> 
                Have an awesome {day}.
              </div>

              <div className="bottom-text">
                <p>
                Drop me an <a style={{color: '#A0A4D9'}} href="mailto:ryanerenteria@gmail.com" className="email" target="_blank" rel="noopener noreferrer">email</a> and let's make some magic ✨</p>
              </div>
            </div>    
        </div>
      </section>
    </Wrapper>
  )
}
 
export default Home;