import styled from 'styled-components';

export const Wrapper = styled.div`
  .main-section {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
    max-width: 50rem;
    width: 100%;
    padding-top: 3rem;
    padding-bottom: 3rem;
    padding: 1rem;
    // border: 2px solid pink;
    
    .article, h1 {
      color: #A0A4D9;
      /* border: 2px dotted green; */
      // margin-bottom: 4rem;
    }


    h2, h3, h5 {
      color: #FFFFFF;
      display: flex;
      // justify-content: space-between;
      // border: 2px dotted green;
    }

    li {
      color: #FFFFFF;
      list-style: none;
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
      // border: 2px solid green;
      
      
      ul {
        padding-left: 0;
        // padding: 1rem;
        // margin: 1rem;
        // border: 2px dotted pink;
      }
      
    }

    .things {
      display: flex;
      justify-content: space-around;
      // align-items: center;
      
      // border: 2px solid red;
    }

    h5 {
      display: flex;
      justify-content: flex-start;
      font-size: 1.125rem;
      // line-height: 1.5;
      // border: 3px dotted purple;
    }
  }
`;