import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
  }

  body {
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 12px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #B3DBED 0% 0% no-repeat padding-box;
    border-radius: 8px;
    opacity: 1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #00A1E6 0% 0% no-repeat padding-box;
    width: 8px;
    border-radius: 8px;
  }

`;
