import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :root {
  font-size: 62.5%;
}

  :focus {
    outline: 0;  
  }

  body {
    background-color: ${(props) => props.theme.background}; 
  }

  body * {
    font-family: "Roboto", sans-serif;
    color: ${(props) => props.theme['info-color']};
  }
`
