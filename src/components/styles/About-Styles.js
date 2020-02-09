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
    /* border: 2px solid pink; */
    
    /* h2, h3, h5 {
      display: flex;
      justify-content: space-between;
      border: 2px dotted green;
    } */

    li {
      list-style: none;
    }

    a {
      text-decoration: none;
      color: #A0A4D9;
    }

    p {
      /* color: #e2e8f0; */
      font-size: 1.1rem;
      /* line-height: 1.5; */
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    .skillz {
      display: flex;
      justify-content: space-between;
      /* margin-top: 4rem; */
      /* border: 2px solid red; */
    }

    ul {
      display: flex;
      flex-direction: column;
      padding-right: 3px;
      /* border: 2px dashed blue; */
      padding-inline-start: 0;
      margin: 0;
    }

    .skillz_category {
        display: flex;
        flex-direction: column;
        margin-right: 5rem;
        /* border: 2px solid pink; */
        
      }

      .skillz_category_label {
        font-weight: 700;
        color: #A0A4D9;
      }

      .skillz_category_item {
        /* border: 2px dotted purple; */
        padding: 2px;
        margin-right: auto;
        font-size: 0.9rem;
        
        
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