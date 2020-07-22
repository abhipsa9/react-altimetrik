import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import SummaryPage from './SummaryPage'
import LandingPage from './LandingPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class Indexpage extends Component {
  constructor() {
    super();
    
  }

  render() {
    return (
      <div>
      <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/cart" component={SummaryPage} />
      </Switch>
      </div>
    );
  }
}

export default Indexpage;
