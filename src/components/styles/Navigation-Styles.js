import styled from 'styled-components';

export const Wrapper = styled.div`
  .navigation {
    display: flex;
    justify-content: space-between;
    padding-top: 2%;
    padding-bottom: 1%;
    /* background-color: #1f2022; */
    /* border: 2px solid green; */
    
    .ryan {
      /* border: 2px solid pink; */
      flex-grow: 1;
      display: block;
      margin-left: 1rem;
    }

    .links a {
      padding: 1rem;
      text-decoration: none;
      /* color: #B2B9C5; */
      filter: contrast(1%);
      color: #000000;
      /* opacity: 80%; */
      /* margin-top: 1rem; */
      /* // border: 2px solid blue; */
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
      background: #383B40;
      border-radius: 100px;
      /* border: 1px solid #383B40; */
      height: 25px;
      position: relative;
      width: 45px;
      text-indent: -9999px;
      /* display: block; */
      /* border: 2px dotted blue; */
    }

    .toggle {
      
      background: #CE9ECE;
      border-radius: 100%;
      
      left: 0;
      top: 3px;
      left: 3px;
      position: absolute;
      transition: 0.2s;
      height: 19px;
      width: 19px;
      /* box-shadow: 0 0 10px #9ecaed; */
      /* border: 2px dotted green; */
    }

    .toggled {
      left: calc(100% - 23px);
    }
    .icons {
      display: flex;
    }
    .switch-wrapper {
      display: flex;
      /* justify-content: center; */
      
      align-items: center;
      /* border: 2px dotted green; */
      margin-top: -2px;
      margin-right: 10px;
      
      /* position: absolute; */
      /* top: 20px;
      right: 30px; */
      
    .switch-wrapper, .sun, .moon, .moon-white {
      width: 15px;
      height: 15px;
      margin: 4px;
      /* border: 2px solid green; */
    }

    .sun-white {
        width: 15px;
        height: 15px;
        margin: 4px;
        /* border: 1px dotted papayawhip; */
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