import React, { Component } from 'react';
import './styles/normalize.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import bridgeTheme from './styles/bridgeTheme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminView from './views/AdminView';
import StudentView from './views/StudentView';
import CreateCohortForm from './views/CreateCohortForm';
import CohortForm from './views/CohortForm';
import NotFound from './views/NotFound';
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
  label {
    font-size: 0.8em;
    font-weight: bold;
  }  
  button {
    cursor: pointer
  }
  .button-style {
    border-radius: ${p => p.theme.borderRadius};
    padding: 0.5em;
    color: white;
    text-align: center;
    font-weight: bold;
    width: ${p => p.width || '24em'};
    font-size: 1rem;
    background: ${bridgeTheme.green};
    border: 3px solid ${bridgeTheme.green};
    text-transform: uppercase;
    text-decoration: none;
    &:hover {
      color: ${bridgeTheme.green};
      background: white;
    }
  }
`;

const Wrapper = styled.main`
  max-width: 64rem;
  margin: 0 auto;
  padding: 2rem 1rem 0 1rem;
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={bridgeTheme}>
        <Router>
          <GlobalStyle />
          <div>
            <Header />
            <Wrapper>
              <Switch>
                <Route path="/" exact component={StudentView} />
                <Route path="/admin" exact component={AdminView} />
                <Route
                  path="/admin/create"
                  exact
                  component={CreateCohortForm}
                />
                <Route path="/apply" exact component={StudentView} />
                <Route path="/apply/:coID" component={CohortForm} />
                <Route component={NotFound} />
              </Switch>
            </Wrapper>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
