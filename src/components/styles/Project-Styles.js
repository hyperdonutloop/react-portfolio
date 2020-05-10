import styled from 'styled-components';

export const Wrapper = styled.div`

  .main-section {
    margin-top: 3rem;
    /* border: 2px dotted red; */
    /* display: flex;
    flex-direction: row; */
    .header {
      text-align: center;
      /* border: 2px dashed pink; */
      margin-bottom: 2rem;
      font-size: 0.4rem;
     
    }

    .top-row {
      text-align: center;
      /* padding: 1rem; */
      margin-top: 4rem;
      /* border: 2px dashed yellowgreen; */
      display: flex;
      margin-bottom: 1rem;

      .cards {
        @media screen and (max-width: 500px) {
          margin-bottom: 4rem;
          /* border: 2px dashed green; */
        }
      }

      h2 {
        font-size: 1.6rem;
        font-weight: 600;
        margin: 0px 0px 20px;
        font-family: 'Karla', sans-serif;
        /* border: 2px dashed pink; */
        /* color: #A0A4D9; */
        letter-spacing: 2px;

        @media screen and (max-width: 500px) {
        letter-spacing: normal;
        }
        
      }


      .desc {
        /* border: 2px dotted yellow; */
        padding: 1rem;
        margin: 1rem;
        /* background-color: #1f2023; */
        box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -15px;
        line-height: 1.3;
        font-size: 1rem;
        font-family: 'Roboto', sans-serif;
        
      }


      .tools-list {
        display: flex;
        list-style: none;
        font-family: Menlo;
        font-size: 0.8rem;
        justify-content: center;
        position: relative;
        z-index: 2;
        flex-wrap: wrap;
        padding: 5px;
        margin: 5px 0px 10px;
        

        li {
          padding: 12px;
        }
        
        .source {
          text-decoration: none;
          color: inherit;
        }
      }

      @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: column;
      }
    }

    .bottom-row {
      display: flex;
      text-align: center;
      /* padding: 1rem; */
      /* margin: 1rem; */
      /* border: 2px dashed yellowgreen; */

      .cards {
        @media screen and (max-width: 500px) {
        margin-bottom: 4rem;
        /* border: 2px dashed purple; */
        }
      }

      .desc {
        padding: 1rem;
        margin: 1rem;
        /* background-color: #1f2023; */
        box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -15px;
        line-height: 1.3;
        font-size: 1rem;
        font-family: 'Roboto', sans-serif;
      }

      

      h2 {
        font-size: 1.6rem;
        font-weight: 600;
        margin: 0px 0px 20px;
        font-family: 'Karla', sans-serif;
        /* color: #A0A4D9; */
        letter-spacing: 2px;

        @media screen and (max-width: 500px) {
        letter-spacing: normal;
        }
      }

      .tools-list {
        display: flex;
        list-style: none;
        font-family: Menlo;
        font-size: 0.8rem;
        justify-content: center;
        position: relative;
        z-index: 2;
        flex-wrap: wrap;
        padding: 5px;
        margin: 5px 0px 10px;
        

        li {
          padding: 12px;
        }
        
        .source {
          text-decoration: none;
          color: inherit;
        }
      }

      @media screen and (max-width: 500px) {
        display: flex;
        flex-direction: column;
      }

    }

  }

.img {
  /* width: 400px; */
  height: auto;
  max-width: 100%;
  /* width: 700px */
}


`;