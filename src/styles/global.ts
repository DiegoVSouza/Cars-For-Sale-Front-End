import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';;


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    
 
  }

  :root{
    --background: #474747;
    --gray: #4d4d4d;
    --white: #fff8f8;
    --blue: #625ffa;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  #root {
    
    margin: 0 auto;
    padding: 0 0 50px;
  }

  button {
    cursor: pointer;
  }
`;

