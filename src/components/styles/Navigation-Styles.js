import styled from 'styled-components';

export const Wrapper = styled.div`
  .navigation {
    display: flex;
    justify-content: flex-end;
    padding-top: 2%;
    padding-bottom: 1%;
    // border: 2px dotted pink;

    .links a {
      padding: 1rem;
      text-decoration: none;
      color: #e2e8f0;
      // margin: 1rem;
      // border: 2px solid blue;
    }

  .switch-wrapper {
    display: flex;
    align-items: center;
    border: 2px solid blue;
    justify-content: center;
    margin-top: -1rem;
    /* margin-bottom: 2rem; */
    /* top: 20px;
    right: 30px; */
  
  .sun, .moon {
    width: 17px;
    height: 17px;
  }
  .sun {
    background: url('../../images/switch/sun.svg') no-repeat center;
    background-size: 100%;
  }
  .moon {
    background: url('../../images/switch/moon.svg') no-repeat center;
    background-size: 100%;
  }
  .toggle-wrapper {
    margin: 10px;
    #switch {
      height: 0;
      width: 0;
      visibility: hidden;
      position: absolute;
      &:checked + label {
        background: $green;
      }
      &:checked + label:after {
        left: calc(100% - 3px);
        transform: translateX(-100%);
      }
    }

    label {
      cursor: pointer;
      text-indent: -9999px;
      width: 45px;
      height: 25px;
      background: #A0A4D9;
      display: block;
      border-radius: 100px;
      position: relative;
      &:after {
        @include transition;
        content: '';
        position: absolute;
        top: 3px;
        left: 3px;
        width: 19px;
        height: 19px;
        background: #fff;
        border-radius: 100%;
      }
    }
  }
}
  }
`;