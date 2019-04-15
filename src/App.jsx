import React, { Component } from 'react';
import { Login } from './Components/Login/Login';
import { Main } from './Components/Main/Main';
import { Container } from 'react-bootstrap';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Container fluid={true}>
          <Router>
              <Switch>
                  <Route path="/" component={Main} exact />
                  <Route path="/connect" component={Login} exact />
              </Switch>
          </Router>
      </Container>
    );
  }
}

export default App;
