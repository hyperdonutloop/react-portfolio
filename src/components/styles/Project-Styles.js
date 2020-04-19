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
        padding: 1rem;
        margin: 1rem;
        background-color: #1f2023;
        box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -15px;
        line-height: 1.3;
      }

      .tools-list {
        display: flex;
        list-style: none;
        font-family: monospace;
        justify-content: center;
        position: relative;
        z-index: 2;
        flex-wrap: wrap;
        padding: 5px;
        margin: 5px 0px 10px;
        

        li {
          padding: 12px;
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
        padding: 0.5rem;
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