import React, { Component } from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

export default class Success extends Component {
  render() {
    return(
      <div className='formSteps formSuccess'>
        <label>Project</label>
        <p>{this.props.name}</p>
        <p>{this.props.email}</p>
        <p>{this.props.project}</p>
        <p>{this.props.type}</p>
        <p>{this.props.version}</p>
        <p>{this.props.budget}</p>
        <Link to='/'>Home</Link>
      </div>
    )
  }
}
