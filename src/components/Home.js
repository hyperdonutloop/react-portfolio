import React from "react"
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

// styled components
import { Wrapper } from './styles/Home-Styles.js';





const theBounceVariants = {
  start: {
    y: "50%"
  },
  end: {
    y: "150%"
  }
};

const theBounce = {
  duration: 0.5,
  yoyo: Infinity,
  // ease: "easeInOut"
}

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
                <span className="wave" role="img" aria-label="wave">👋🏼</span>.
                <br />I build things using{' '}
                <motion.div className="inline-block" whileHover={{ y: -8, transition: theBounce }} variants={theBounceVariants}>
                  <a
                  href="https://reactjs.org/" 
                  target="_blank" 
                  rel="noopener noreferrer" children="React"/></motion.div>
                  ,{' '}

                <motion.div className="inline-block" whileHover={{ y: -8, transition: theBounce }} variants={theBounceVariants}>
                <a
                  href="https://redux.js.org/" 
                  target="_blank" 
                  rel="noopener noreferrer" children="Redux" /></motion.div>, and {' '}

                <motion.div 
                  className="inline-block" 
                  whileHover={{ y: -8, transition: theBounce}} 
                  variants={theBounceVariants}
                >
                  <a
                    href="https://nodejs.dev/" 
                    target="_blank" 
                    rel="noopener noreferrer" children="Node"
                  />
                </motion.div>.
                <br />
                Currently learning GraphQL + Apollo.<br /> 
                Have an awesome {day}.
              </div>

              <div className="bottom-text">
                <span>
                Drop me an{' '}
                <motion.div 
                  className="inline-block-mail" 
                  whileHover={{ y: -4, transition: theBounce}} 
                  variants={theBounceVariants}
                >
                  <a href="mailto:ryanerenteria@gmail.com" className="email" target="_blank" rel="noopener noreferrer">email</a> 
                </motion.div> and let's make some magic ✨</span>
              </div>
              <div className="icons">
                <a
                  className="twitter"
                  href="https://twitter.com/hyperdonutloop" 
                  target="_blank" 
                  rel="noopener noreferrer">
                  <FontAwesomeIcon 
                  icon={faTwitter} 
                  style={{ color: '#A0A4D9' }} 
                  size="sm" />
                </a>
                <a 
                  className="github"
                  href="https://github.com/hyperdonutloop" 
                  target="_blank" 
                  rel="noopener noreferrer">
                  <FontAwesomeIcon 
                  icon={faGithub} 
                  style={{ color: '#A0A4D9' }} 
                  size="sm" />
                </a>
              </div>
            </div>    
        </div>
      </section>
    </Wrapper>
  )
}
 
export default Home;