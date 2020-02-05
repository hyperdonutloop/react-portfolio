import styled from 'styled-components';
import { motion } from 'framer-motion';

 export const Wrapper = styled.div`
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
      color: #FFFFFF;

      div.motion {
        max-width: 20%;
        border: 2px solid green;
      }
    }


    img {
      max-width: 100%;
      height: auto;
      object-fit: contain;
      padding-left: 2rem;
      padding-right: 0rem;
      margin-top: 2rem;
      
    }

    a {
      text-decoration: none;
      color: #A0A4D9;
    }

    p {
      color: #FFFFFF;
      font-size: 1.25rem;
    }
    
   
  

  }
`;

 export const MotionBox = styled(motion.div)`
  background-color: red;
  float: none;
  clear: none;

`;