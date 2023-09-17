import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.normal};
  }
  html {
    background-color: #fff;
    max-width: 100vw;
    width: 100vw;
    height: 100%;
    overflow-x: hidden;
  }
  button, a {
    cursor: pointer;
  }
`;
