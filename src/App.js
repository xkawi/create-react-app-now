import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from './logo.svg';
import './App.css';

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
        {this.props.children}
      </div>
    );
  }
}

export default App;
