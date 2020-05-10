import styled from 'styled-components';

export const Wrapper = styled.div`

  .navigation {
    display: flex;
    justify-content: space-between;
    padding-top: 2%;
    padding-bottom: 2%;
    /* align-items: center; */
    z-index: 1;
    /* opacity: 50%; */
    /* background-color: rgba(166, 189, 223, 0.4); */
    /* filter: drop-shadow(5px 5px 15px); */
    /* backdrop-filter: blur(5px); */
    /* position: fixed; */
    /* padding-bottom: 0.5rem; */
    /* border: 2px dotted green; */

    .hap {
      /* border: 2px solid blue; */
      position: relative;
      /* left: 50px; */
      display: flex;
      align-items: center;

      @media screen and (max-width: 500px) {
        position:relative;
        left: -15px;

      }
    }
    

    #desktop {display: block;}
    #mobile {display: none;}

    @media screen and (max-width: 500px) {

      #desktop {display: none;}
      #mobile {display: block;}
      /* border: 2px dashed green; */
      display: flex;
      /* justify-content: left; */
      padding-top: 3%;
      /* position: relative; */
      /* left: -50px; */

    }

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

      @media screen and (max-width: 500px) {
        /* border: 2px dashed purple; */
        margin-right: 0.5rem;
       

      }
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