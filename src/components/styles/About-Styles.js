import styled from 'styled-components';

export const Wrapper = styled.div`
  .main-section {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10rem;
    max-width: 50rem;
    width: 100%;
    padding-top: 3rem;
    padding-bottom: 3rem;
    padding: 1rem;
    border: 2px solid pink;



    h1, h2, h3, h5 {
      color: #FFFFFF;
      border: 2px dotted green;
      display: flex;
      justify-content: space-between;
    }

    li {
      color: #FFFFFF;
      list-style: none;
    
      // padding: 3px;
      border: 2px dotted blue;
    }
    a {
      text-decoration: none;
      color: #A0A4D9;
    }

    p {
      color: #e2e8f0;
      font-size: 1.18rem;
      line-height: 1.5;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    .sections {
      border: 2px solid green;
      
      
      ul {
        // display: flex;
        // flex-direction: column;
        padding-left: 0;
        padding: 1rem;
      }
      
    }

    .things {
      display: flex;
      justify-content: space-evenly;
      border: 2px solid red;
    }
  }
`;