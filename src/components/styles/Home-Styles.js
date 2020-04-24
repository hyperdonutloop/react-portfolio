import styled from 'styled-components';

 export const Wrapper = styled.div`
  .container {
    margin-left: auto;
    margin-right: auto;
    margin-top: 10rem;
    max-width: 1024px;
    // width: 100%;
    padding-top: 3rem;
    padding-bottom: 3rem;
    padding: 1rem;
    /* border: 5px dotted palevioletred; */
    display: flex;
    flex-direction: row;


    .main-font {

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
     
      margin-top: 4rem;
      margin-bottom: 4rem;
      /* border: 3px solid red; */
      font-size: 2.50rem;
      /* color: #FFFFFF; */
      /* margin-left: 2rem; */

      div.motion {
        /* max-width: 20%; */
        /* border: 2px solid green; */
      }

      @media screen and (max-width: 1055px) {
        font-size: 2.30rem;
      }

      @media screen and (max-width: 375px) {
        font-size: 1em;
        /* margin-left: 2rem; */
        border: 2px dotted green;
        /* text-align: left; */
        /* width: 400px; */
        margin-bottom: 2rem;
        /* max-width: 100%; */
      }

    }

    .avatar {
      max-width: 100%;
      height: auto;
      object-fit: contain;
      padding-left: 2rem;
      padding-right: 0rem;
      margin-top: 2rem;
      margin-left: 3rem;
      /* border: 2px dotted blue; */
      
      @media screen and (max-width: 800px) {
        /* border: 2px dashed purple; */
        width: 150px;
      }

      @media screen and (max-width: 500px) {
        border: 2px dashed purple;
        width: 100px;
        margin-left: 0;
        padding-left: 15px;
        /* padding-right: 2rem; */
        
        /* padding-top: 50px; */
        
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
     padding: 0.3rem;
     /* border: 2px dotted green; */
   }

   .github {
     /* border: 2px dotted green; */
     padding: 0.3rem;
   }
  

  }

  .bottom-text {
    letter-spacing: 0.1em;

    @media screen and (max-width: 500px) {
        font-size: 0.8rem;
        letter-spacing: normal;
        /* border: 1px dashed yellow; */
        /* max-width: 100%;
        overflow-y: auto; */
        
      }
  }
`;