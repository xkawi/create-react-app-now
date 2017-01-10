import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Link } from 'react-router'
import App from './App';
import About from './About';
import './index.css';

const NoMatch = () => (
  <p>No Match <Link to='/'>go back</Link></p>
)

ReactDOM.render((
  <Router history={browserHistory} >
    <Route path="/" component={App} />
    <Route path="/about" component={About}/>
    <Route path="*" component={NoMatch}/>
  </Router>
), document.getElementById('root'));
