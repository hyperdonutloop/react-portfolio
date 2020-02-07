import styled from 'styled-components';

export const Wrapper = styled.div`
  .navigation {
    display: flex;
    justify-content: flex-end;
    padding-top: 2%;
    padding-bottom: 1%;
    background-color: #1f2022;
    border: none;
    // border: 2px dotted pink;

    .links a {
      padding: 1rem;
      text-decoration: none;
      color: #e2e8f0;
      // margin: 1rem;
      // border: 2px solid blue;
    }

    .dark-mode__toggle {
      background: papayawhip;
      border-radius: 50px;
      border: 1px solid black;
      height: 20px;
      position: relative;
      width: 40px;
    }

    .toggle {
      background: #f68819;
      border-radius: 50px;
      height: 18px;
      left: 0;
      position: absolute;
      transition: 0.2s;
      width: 20px;
    }

    .toggled {
      left: 18px;
    }

  }
`;