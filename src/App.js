import React, { Component } from 'react';
import './normalize.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
   font-family: 'Open Sans,sans-serif';
  }
`;

const bridgeTheme = {
  padding: '.5rem',
  indigo: '#000c9e',
  blue: '#2fa1d4',
  green: '#08c39d',
  pink: '#eb2c97'
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={bridgeTheme}>
        <>
          <GlobalStyle />
          <div>Home page!</div>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
