import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
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

  svg, strong, span {
      color: ${({ theme }) => theme.colors.cagece.blue[50]};
  }
`;
