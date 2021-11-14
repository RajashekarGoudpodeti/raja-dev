import React, { Component } from 'react';
import { Route, Router, withRouter, Switch } from 'react-router-dom';
// import { Switch } from "react-router";
import Home from "./Home";
import history from './history'
import College from './College'
import Student from './Student'

class RoutesV2 extends Component {

  render() {
    return (
      <Router history={history}>
          <Switch>
            <Route path="/" exact render={(props) => <Home {...props}/>} />
            <Route path="/college/:name" exact  render={(props) => <College  {...props}/>} />
            <Route path="/student/:name" exact render= {(props) => <Student {...props}/> } />
          </Switch>
      </Router>
    )
  }
}

export default withRouter(RoutesV2)
