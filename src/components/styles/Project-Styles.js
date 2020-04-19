import styled from 'styled-components';

export const Wrapper = styled.div`

  .main-section {
    /* border: 2px dotted red; */
    /* display: flex;
    flex-direction: row; */
    .header {
      text-align: center;
    }

    .top-row {
      text-align: center;
      padding: 1rem;
      margin: 1rem;
      /* border: 2px dashed yellowgreen; */
      display: flex;

      h5 {
        font-size: 28px;
        font-weight: 600;
        margin: 0px 0px 20px;
      }

      .desc {
        /* border: 2px dotted yellow; */
        padding: 25px;
        margin: 1rem;
        background-color: #1f2023;
        box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -15px;
        line-height: 1.3;
        font-size: 1.5vmin;
        
  
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

      @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
      }
    }

    .bottom-row {
      display: flex;
      text-align: center;
      padding: 1rem;
      margin: 1rem;
      /* border: 2px dashed yellowgreen; */

      .desc {
        /* border: 2px dotted yellow; */
        padding: 1rem;
        margin: 1rem;
        background-color: #1f2023;
        box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -15px;
        line-height: 1.3;
      }

      h5 {
        font-size: 28px;
        font-weight: 600;
        margin: 0px 0px 20px;
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

      @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
      }

    }

  }

.img {
  /* width: 500px; */
  height: auto;
  max-width: 100%;
}


`;