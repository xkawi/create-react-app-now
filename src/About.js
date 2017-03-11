import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div>About page here <Link to='/'>back</Link> | <Link to='/anything'>or Test Not Found Page</Link></div>
    );
  }
}

export default About;
