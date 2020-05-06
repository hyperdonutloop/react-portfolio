import styled from 'styled-components';

 export const Wrapper = styled.div`
  .container {
    margin-left: auto;
    margin-right: auto;
    margin-top: 10rem;
    max-width: 1024px;
    /* width: 100%; */
    padding-top: 3rem;
    padding-bottom: 3rem;
    padding: 1rem;
    /* border: 5px dotted palevioletred; */
    display: flex;
    flex-direction: row;

    
    /* MAIN FONT START */ 
    .main-font {
      font-family: 'Karla', sans-serif;
      margin-top: 4rem;
      margin-bottom: 4rem;
      /* border: 3px solid red; */
      font-size: 2.46rem;
    

      span.wave {
        animation-name: wave-animation;    /* Refers to the name of your @keyframes element below */
        animation-duration: 2.5s;          /* Change to speed up or slow down */
        animation-iteration-count: infinite;    /* Never stop waving :) */
        transform-origin: 70% 70%;         /* Pivot around the bottom-left palm */
        display: inline-block;
      }

      @keyframes wave-animation {
        0% { transform: rotate(  0.0deg) }
        10% { transform: rotate(-10.0deg) }    
        20% { transform: rotate( 12.0deg) }
        30% { transform: rotate(-10.0deg) }
        40% { transform: rotate(  9.0deg) }
        50% { transform: rotate(  0.0deg) }    /* Reset for the last half to pause */
        100% { transform: rotate(  0.0deg) }
      }
     
      /*THIS IS THE MAIN PARAGRAPH MOBILE QUERY*/
      @media screen and (max-width: 500px) {
        /* margin-top: 1rem; */
        /* border: 2px dotted palegoldenrod; */
        font-size: 1rem;
        margin-bottom: 0rem;
        margin-top: 3rem;
        padding: 0.4rem;
        position: relative;
        left: -25px;
        width: 320px;
        
        
      }
      /* iPhone 11 */ 
      @media screen 
        and (device-width: 414px) 
        and (device-height: 896px) 
        and (-webkit-device-pixel-ratio: 2) {

        /* border: 2px dotted green; */
        font-size: 1rem;
        width: 350px;
        padding: 0rem;
        left: -22px;
        margin-top: 4rem;

      }
      /* iPhone 11 Pro */ 
      @media only screen 
        and (device-width: 375px) 
        and (device-height: 812px) 
        and (-webkit-device-pixel-ratio: 3) { 
          /* border: 2px dotted green; */
          width: 290px;
          margin-top: 3rem;
          left: -30px;
          br{content:' ';}
          br:after{content:' ';}

        }
      /* IPHONE 8 */
      @media only screen 
        and (device-width : 375px) 
        and (device-height : 667px) 
        and (-webkit-device-pixel-ratio : 2) { 
          width: 290px;
          margin-top: 2rem;
          left: -30px;
          br{content:' ';}
          br:after{content:' ';}
        }

    } /* MAIN FONT END */ 

    .avatar {
      max-width: 100%;
      height: auto;
      object-fit: contain;
      /* padding-left: 2rem; */
      /* padding-right: 0rem; */
      margin-top: 2rem;
      margin-left: 3rem;
      /* border: 2px dotted blue; */
      
      @media screen and (max-width: 800px) {
        /* border: 2px dashed purple; */
        width: 150px;
      }

      @media screen and (max-width: 500px) {
        /* border: 2px dashed purple; */
        width: 70px;
        margin-left: 0;
        padding-left: 1.3rem;
        position: relative;
        bottom: 15px;
        
      }
      /* IPHONE 11 */
      @media screen 
        and (device-width: 414px) 
        and (device-height: 896px) 
        and (-webkit-device-pixel-ratio: 2) {

        /* border: 2px dotted green; */
        width: 75px;

        
      }
      /* iPhone 11 Pro */ 
      @media only screen 
        and (device-width: 375px) 
        and (device-height: 812px) 
        and (-webkit-device-pixel-ratio: 3) { 
          bottom: 30px;
        }
      /* IPHONE 8 */
      @media only screen 
        and (device-width : 375px) 
        and (device-height : 667px) 
        and (-webkit-device-pixel-ratio : 2) { 
          bottom: 40px;
        }
    }

    a {
      text-decoration: none;
      color: #A0A4D9;
    }

    p {
      /* color: #FFFFFF; */
      /* font-size: 1.25rem; */
    }
    
   div.inline-block {
     vertical-align: top;
     display:inline-block;
     color: #A0A4D9;
    
   }

   div.inline-block-mail {
    /* vertical-align: top; */
    display:inline-block;
    color: #A0A4D9;
   }

   .twitter {
     padding: 0.5rem;
     /* border: 2px dotted green; */
     position: relative;
     left: -6px;

      @media screen and (max-width: 500px) {
        left: -26px;
      }

      @media screen 
      and (device-width: 414px) 
      and (device-height: 896px) 
      and (-webkit-device-pixel-ratio: 2) {
      
      left: -28px;
    }

   }

   .github {
     /* border: 2px dotted green; */
     padding: 0.5rem;
     position: relative;
     left: -6px;

      @media screen and (max-width: 500px) {
        left: -25px;
      }

      @media screen 
      and (device-width: 414px) 
      and (device-height: 896px) 
      and (-webkit-device-pixel-ratio: 2) {
      
      left: -32px;
    }
  }

  .linkedin {
     /* border: 2px dotted green; */
     padding: 0.5rem;
     position: relative;
     left: -6px;

      @media screen and (max-width: 500px) {
        left: -24px;
      }

      @media screen 
      and (device-width: 414px) 
      and (device-height: 896px) 
      and (-webkit-device-pixel-ratio: 2) {
      
      left: -32px;
    }
  }

  .bottom-text {
    letter-spacing: 0.1em;
    padding-bottom: 0.6rem;
    font-family: 'Roboto', sans-serif;
    

    @media screen and (max-width: 500px) {
        font-size: 0.8rem;
        letter-spacing: normal;
        /* border: 2px dashed red; */
        max-width: 100%;
        /* overflow-y: auto; */
        position: relative;
        left: -29px;
        width: 280px;
        padding: 0.7rem;
      }
    /* IPHONE 11 */
    @media screen 
      and (device-width: 414px) 
      and (device-height: 896px) 
      and (-webkit-device-pixel-ratio: 2) {

      /* border: 2px double red; */
      position: relative;
      left: -28px;
      padding: 0.4rem;
      margin-top: 0.4rem;
      margin-bottom: 0.5rem;
      width: 300px;
    }
    /* IPHONE 11 Pro */
    @media only screen 
      and (device-width: 375px) 
      and (device-height: 812px) 
      and (-webkit-device-pixel-ratio: 3) { 
        /* border: 2px dotted green; */
        position: relative;
        left: -35px;

      }
  }
}
`;