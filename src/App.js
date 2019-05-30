import React, { Component } from 'react';
import './normalize.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import AdminView from './views/AdminView';
import StudentView from './views/StudentView';
import CreateCohort from './views/CreateCohort';
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
        <Router>
          <GlobalStyle />
          <div>
            <Header admin />
            <Wrapper>
              {/* just a way to go to links for now */}
              <nav>
                <ul>
                  <li>
                    <Link to="/">Frontpage</Link>
                  </li>
                  <li>
                    <Link to="/admin">Admin view</Link>
                  </li>
                  <li>
                    <Link to="/admin/create">Create Cohort</Link>
                  </li>
                  <li>
                    <Link to="/apply/:coID">Cohort Submission Form</Link>
                  </li>
                </ul>
              </nav>

              <Switch>
                <Route path="/" exact component={StudentView} />
                <Route path="/admin" exact component={AdminView} />
                <Route path="/admin/create" exact component={CreateCohort} />
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
