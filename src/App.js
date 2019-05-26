import React, { Component } from 'react';
import './normalize.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import AdminApplications from './components/AdminApplications';
import Header from './components/Header';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.15;
  }  
`;

const Wrapper = styled.div`
  max-width: 64rem;
  margin: 0 auto;
`;

const bridgeTheme = {
  padding: '.5rem',
  indigo: '#000c9e',
  blue: '#2fa1d4',
  green: '#08c39d',
  pink: '#eb2c97',
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={bridgeTheme}>
        <>
          <GlobalStyle />
          <div>
            <Header admin />
            <Wrapper>
              <AdminApplications />
            </Wrapper>
          </div>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
