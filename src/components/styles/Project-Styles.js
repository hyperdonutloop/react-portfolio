import styled from 'styled-components';

export const Wrapper = styled.div`

  .main-section {
    border: 2px dotted red;
    /* display: flex;
    flex-direction: row; */
    .header {
      text-align: center;
    }

    .top-row {
      text-align: center;
      padding: 1rem;
      margin: 1rem;
      border: 2px dashed yellowgreen;
      display: flex;

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
      border: 2px dashed yellowgreen;

    }

  }

.img {
  /* width: 500px; */
  height: auto;
  max-width: 100%;
}


`;