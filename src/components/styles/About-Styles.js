import styled from 'styled-components';

export const Wrapper = styled.div`
  .main-section {
    display: flex;
    flex-direction: column;
    margin-left: 4.5rem;
    margin-right: 4.5rem;
    margin-top: 7rem;
    padding: 1rem;
    text-align: justify;
    letter-spacing: 1.5px;
    

    .top {
      display: flex;
      align-items: center;
      /* border: 2px solid pink; */

      @media screen and (max-width:500px) {
          flex-direction: column-reverse;
          /* border: 2px solid pink; */
          padding-top: 1rem;
          
        }

      .words {
        position: relative;
        left: -67px;
        /* border: 2px dotted purple; */
        padding: 0px 5rem 0px 5rem;
        font-family: 'Roboto', sans-serif;
        

        @media screen and (max-width:500px) {
          left: inherit;
          padding-top: 1rem;
          font-size: 1px;
          max-width: 100%;
          padding-bottom: 1rem;
          padding-left: 0;
          padding-right: 0;
          
        }

        .ryan {
          color: #72C0EA;
        }
      }
    }

    .me {
      width: 200px;
      /* margin: 3rem; */
      /* border: 2px dotted green; */
      border-radius: 50%;
      /* padding: 1rem; */
      position: relative;
      left: -45px;

      @media screen and (max-width:500px) {
          width: 150px;
          left: inherit;
          padding-bottom: 1rem;
          
        }
      
    }
    
    
    
    @media screen and (max-width:500px) {
      /* border: 2px dashed green; */
      margin-right: 0.5rem;
      margin-left: 0.5rem;
      margin-top: 1rem;
      
    }

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
      /* margin-top: 1rem;
      margin-bottom: 1rem; */
      margin: 1rem;
      /* border: 2px dotted pink; */
      line-height: 1.4;
      /* font-weight: 300; */

      @media screen and (max-width:500px) {
      font-size: 1rem;
      margin: 0;
      line-height: 1.4;
      
    }
    }

    .skillz {
      display: flex;
      justify-content: space-between;
      /* margin-top: 4rem; */
      /* border: 2px solid red; */
      padding: 1rem;

      @media screen and (max-width:500px) {
        display: flex;
        flex-direction: column;
        /* border: 2px dashed orange; */
        justify-content: space-around;
      }
    }

    ul {
      /* display: flex;
      flex-direction: column; */
      padding: 1rem;
      /* border: 2px dashed green; */
      /* padding-inline-start: 0; */
      margin: 0;
      box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -15px;
      text-align: initial;
      font-family: 'Roboto', sans-serif;

      @media screen and (max-width:500px) {
        padding: 1rem;
        /* justify-content: center; */
      
      }
    }

    .skillz_category {
      display: flex;
      flex-direction: column;
      margin-right: 5rem;
      /* border: 2px dotted pink; */
      
      

      @media screen and (max-width:500px) {
        padding: 1rem;
        /* justify-content: center; */
        margin-right: 0;
        /* border: 3px double purple; */
      }
        
    }

      .skillz_category_label {
        font-weight: 700;
        color: #A0A4D9;
        margin-bottom: 1rem;
        text-align: center;
        font-family: 'Karla', sans-serif;
        /* border: 2px dashed green; */
        

        @media screen and (max-width:500px) {
          text-align: center;
        }
      }

      .skillz_category_item {
        /* border: 2px dotted purple; */
        padding: 2px;
        margin-right: auto;
        font-size: 0.9rem;
  
      }

    /* h5 {
      display: flex;
      justify-content: flex-start;
      font-size: 1.125rem;
      font-family: 'Karla', sans-serif;
      border: 3px dotted purple;
    } */

    h2 {
      font-family: 'Karla', sans-serif;
      @media screen and (max-width:500px) {
          text-align: center;
        }
    }
  }
`;