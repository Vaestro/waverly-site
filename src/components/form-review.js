import React, { Component } from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

export default class Review extends Component {
  saveAndBack(e) {
    e.preventDefault()
    this.props.preStep()
  }

  complete(e) {
    e.preventDefault()
    this.props.nextStep()
  }

  render() {
    return(
      <div className='formSteps formReview'>
        <label>Review</label>
        <p>{this.props.name}</p>
        <p>{this.props.email}</p>
        <p>{this.props.project}</p>
        <p>{this.props.type}</p>
        <p>{this.props.version}</p>
        <p>{this.props.budget}</p>
        <button className='backBtn' onClick={this.saveAndBack.bind(this)}>
          <i className='fa fa-arrow-left'></i>
        </button>
        <button className='completeBtn' onClick={this.complete.bind(this)}>Complete</button>
      </div>
    )
  }
}
