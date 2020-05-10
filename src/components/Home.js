import React from "react"
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// styled components
import { Wrapper } from './styles/Home-Styles.js';

const loadingWordVariants = {
  start: {
    y: "50%"
  },
  end: {
    y: "150%"
  }
};

const loadingWordTransition = {
  duration: 0.7,
  yoyo: Infinity,
  ease: "easeInOut"
}

const pageVariants = {
  initial: {
    opacity: 0,
    // x: "-100vw",
    // scale: 0.8
  },
  in: {
    opacity: 1,
    // x: 0,
    // scale: 1
  },
  out: {
    opacity: 0,
    // x: "100vw",
    // scale: 1.2
  }
};

// const pageTransition = {
//   type: "tween",
//   ease: "anticipate",
//   duration: 0.5
// };

const pageStyle = {
  position: "relative"
};

function Home () {
  const [ day, setDay ] = React.useState('day')

  React.useEffect(() => {
    const days = 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'
    setDay(days.split(' ')[new Date().getDay()])
  }, [])

  return (
    <Wrapper>
      <section>
        <motion.div
          style={pageStyle}
          initial='out' 
          animate='in' 
          exit='out' 
          // variants={pageVariants} 
          // transition={pageTransition}
          className="container"
        >
          
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
  
            <div className="all-text">

              {/* MAIN PARAGRAPH STARTS HERE */}
              <motion.div 
                className="main-font"
                // variants={loadingContainerVariants}
                // initial="start"
                // animate="end"
              >
                Hello{' '} 
                <span className="wave" role="img" aria-label="wave">👋🏼</span>.
                <br />I build things using{' '}
                <motion.div 
                  className="inline-block"
                  variants={loadingWordVariants}
                  // transition={loadingWordTransition}
                  whileHover={{ y: -8, transition: loadingWordTransition }} 
                  // variants={loadingWordVariants}
                >
                  <a
                  href="https://reactjs.org/" 
                  target="_blank" 
                  rel="noopener noreferrer" children="React"/></motion.div>
                  ,{' '}

                <motion.div 
                  className="inline-block"
                  variants={loadingWordVariants}
                  // transition={loadingWordTransition}
                  whileHover={{ y: -8, transition: loadingWordTransition }} 
                  // variants={loadingWordVariants}
                >
                <a
                  href="https://redux.js.org/" 
                  target="_blank" 
                  rel="noopener noreferrer" children="Redux" /></motion.div>, and {' '}

                <motion.div 
                  className="inline-block"
                  variants={loadingWordVariants}
                  // transition={loadingWordTransition}
                  whileHover={{ y: -8, transition: loadingWordTransition }} 
                  // variants={loadingWordVariants}
                >
                  <a
                    href="https://nodejs.dev/" 
                    target="_blank" 
                    rel="noopener noreferrer" children="Node"
                  />
                </motion.div>.
                <br />
                Currently studying antigravity in python.<br /> 
                Have an awesome {day}.
              </motion.div>
              {/* MAIN PARAGRAPH ENDS HERE */}

              <div className="bottom-text">
                <span>
                Drop me an{' '}
                <motion.div 
                  className="inline-block-mail" 
                  whileHover={{ y: -4, transition: loadingWordTransition}} 
                  variants={loadingWordVariants}
                >
                  <a 
                    href="mailto:ryanerenteria@gmail.com" 
                    className="email" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    children="email" 
                  /> 
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
                <a 
                  className="linkedin"
                  href="https://www.linkedin.com/in/ryanrenteria/" 
                  target="_blank" 
                  rel="noopener noreferrer">
                  <FontAwesomeIcon 
                  icon={faLinkedin} 
                  style={{ color: '#A0A4D9' }} 
                  size="sm" />
                </a>
              </div>
            </div>    
        </motion.div>
      </section>
    </Wrapper>
  )
}
 
export default Home;