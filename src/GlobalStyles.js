import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

html {
  box-sizing: border-box;
  font-size: 100%;
  height: 100%;
}

body {
  width: 100%;
  height: 100%;
  font-family: Arial, sans-serif;
  line-height: 1.5;
  background-color: #F9F9F9;
  color: #3B3745;
  display: flex;
  justify-content: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  #root {
    max-width: 100%;
    margin-top: 5%;
  }
}`;

export default GlobalStyle;
