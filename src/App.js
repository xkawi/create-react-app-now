import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'
import About from './About';
import logo from './logo.svg';
import './App.css';

const NoMatch = ({ location }) => (
  <div>
    <p>No Match for <code>{location.pathname}</code></p>
    <Link to='/'>go back</Link>
  </div>
)

class App extends Component {
  render() {
    const secretCode = process.env.REACT_APP_SECRET_CODE;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>REACT_APP_SECRET_CODE: { !secretCode ? 'env not set yet' : secretCode }</p>
        <p><Link to='/about'>about us</Link></p>
      </div>
    );
  }
}

const BasicApp = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
)

export default BasicApp;
