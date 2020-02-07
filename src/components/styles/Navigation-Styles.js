import styled from 'styled-components';

export const Wrapper = styled.div`
  .navigation {
    display: flex;
    justify-content: flex-end;
    padding-top: 2%;
    padding-bottom: 1%;
    /* background-color: #1f2022; */
    border: none;
    // border: 2px dotted pink;

    .links a {
      padding: 1rem;
      text-decoration: none;
      color: #e2e8f0;
      // margin: 1rem;
      // border: 2px solid blue;
    }

    /* .sun, .moon {
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
    } */

    .dark-mode__toggle {
      background: #CE9ECE;
      border-radius: 50px;
      border: 1px solid black;
      height: 20px;
      position: relative;
      width: 40px;
      /* border: 2px dotted blue; */
    }

    .toggle {
      background: #FFFFFF;
      border-radius: 50px;
      height: 22px;
      left: 0;
      position: absolute;
      transition: 0.2s;
      width: 22px;
      /* border: 2px dotted green; */
    }

    .toggled {
      left: 18px;
    }
    .icons {
      display: flex;
    }
    .switch-wrapper {
      display: flex;
      /* justify-content: center; */
      
      align-items: center;
      border: 2px dotted green;
      margin-top: -7px;
      
      /* position: absolute; */
      /* top: 20px;
      right: 30px; */
      
    .switch-wrapper, .sun, .moon, .moon-white {
      width: 15px;
      height: 15px;
      margin: 4px;
      border: 2px solid green;
    }

    .sun-white {
        width: 15px;
        height: 15px;
        margin: 4px;
        border: 1px dotted papayawhip;
      }
    
    /* .toggle-wrapper {
      margin: 10px;
      border: 3px solid purple;
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
          background: grey;
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
  } */
} /* toggle-wrapper closing tag*/

}
`;