import styled from 'styled-components';

export const Wrapper = styled.div`
  .main-section {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10rem;
    max-width: 1024px;
    width: 100%;
    padding-top: 3rem;
    padding-bottom: 3rem;
    padding: 1rem;
    
    border: 2px solid pink;

    .article {
      display: flex;
      flex-direction: column;
      // margin: auto;
      border: 2px dotted purple;

      p {
        font-size: 2.25rem;
        border: 2px dotted red;
      }
      .links a {
       border: 2px solid purple;
       margin: 10px;
      }

      h1, h2, p {
        color: #FFFFFF;
      } 
      a {
        text-decoration: none;
        color: #A0A4D9;
        
        /* font-weight: 300; */
        /* padding: 1rem; */
      }

      

    }


  }
`;