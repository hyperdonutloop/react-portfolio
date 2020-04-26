import styled from 'styled-components';

export const Wrapper = styled.div`

  .navigation {
    display: flex;
    justify-content: space-between;
    padding-top: 2%;
    padding-bottom: 1%;
    /* align-items: center;
    z-index: 1; */
    

    /* @media only screen and (max-width: 500px) {
    height: auto;
    min-height: 50px;
    display: block;
    position: relative;
    
    .icon {
      display: inline-block;
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
    ul.collapsed {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;
      border: 2px dashed green;

      overflow: hidden;
      max-height: 0;
      -moz-transition-duration: 0.4s;
      -webkit-transition-duration: 0.4s;
      -o-transition-duration: 0.4s;
      transition-duration: 0.4s;
      -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

      &.is-expanded {
        overflow: hidden;
        max-height: 500px; /* approximate max height */
        -moz-transition-duration: 0.4s;
        -webkit-transition-duration: 0.4s;
        -o-transition-duration: 0.4s;
        transition-duration: 0.4s;
        -moz-transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        -o-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
      }
      li {
        padding: 15px 10px;
        margin: 0px 0px;
        width: 100%;
      }
    }
  } */

    .ryan .active-wht {
      /* text-decoration: underline #A0A4D9; */
      /* border-bottom: 2px #A0A4D9; */
      /* border: 2px dotted blue; */
    }

    .ryan .active-drk {
      /* text-decoration: underline #A0A4D9; */
      /* border-bottom: 2px #A0A4D9; */
      /* border: 2px dotted blue; */
    }

    .links .active-wht {
      /* text-decoration: underline #A0A4D9; */
      /* border-bottom: 2px  solid #A0A4D9; */
      color: #A0A4D9;
    }

    .links .active-drk {
      /* text-decoration: underline #A0A4D9; */
      /* border-bottom: 2px  solid #A0A4D9; */
      color: black;
    }
    
    .ryan {
      /* border: 2px solid pink; */
      flex-grow: 1;
      display: block;
      margin-left: 1rem;
    }
    
    .me-wht {
      text-decoration: none;
      color: #FFFFFF;
      opacity: 65%;
      font-weight: 400;
    }

    .me-dark {
      text-decoration: none;
      color: #000000;
      font-weight: 400;
      opacity: 67%;
    }

    .item-wht {
      text-decoration: none;
      color: #FFFFFF;
      opacity: 65%;
      font-weight: 400;
    }

    .item-drk {
      text-decoration: none;
      color: #000000;
      /* opacity: 67%; */
      font-weight: 400;
      
    }


  

    .links a {
      padding: 1rem;
      text-decoration: none;
    }

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
    
} /* toggle-wrapper closing tag*/


}
`;