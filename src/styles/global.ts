import { createGlobalStyle } from 'styled-components';

// Estilo global da aplicação
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  body {
    background: #e6ecf0  ;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Roboto','Helvetica Neue', 'Helvetica', Arial, Helvetica, sans-serif;
    text-rendering: optimizeLegibility !important;

      }

  body,input, button {
    font: 16px Roboto, sans-serif;
  }

/*
  #root {
    max-width: 1170px;
    margin: 0 auto;
    padding: 0 30px;
    }
*/
  button {
    cursor: pointer;
  }

  input, button {
    outline: 0;
  }

  .content {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0  30px;
  }

ul,a{
  list-style: none;
  text-decoration: none;
}

`;
