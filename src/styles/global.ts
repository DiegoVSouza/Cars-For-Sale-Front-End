import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';;


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    &::-webkit-scrollbar{
        width: 5px;
        background: var(--gray--medium);
        
       
        
    }

    &::-webkit-scrollbar-thumb{
        background: var(--blue);
        border-radius: 10px;
        max-height: 200px;
    }
    
 
  }

  :root{
    --background: #151418;
    --black: #0a0a0a;
    --gray-medium: #b3b3b3; 
    --gray-bold: #7a7979;
    --gray: #504f4f;
    --white: #fff8f8;
    --blue: #625ffa;
  }

  @media (max-width: 1080px){
    html{
        font-size: 93.75%;
    }
  }
  @media (max-width: 720){
      html{
          font-size: 87.5%;
      }
  }
  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    
  }

  a{
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  body, input, textarea, select, button{
    font: 400 1rem "Roboto", sans-serif;
    border: 0;
}

  #root {
    
    margin: 0 auto;
    padding: 0 0 50px;
  }

  button {
    cursor: pointer;
  }

  .react-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
  
  .react-modal-content {
    position: relative;
    padding: 3rem;
    width: 100%;
    max-width: 576px;
    background: var(--background);
    border-radius: 0.25rem;
    z-index: 999;
  }

`;

