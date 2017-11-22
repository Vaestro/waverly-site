import React, { Component } from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

export default class Intro extends Component {
  saveAndContinue(e) {
    e.preventDefault()
    let next = false;
    let data = {
      name: this.refs.name.value,
      email: this.refs.email.value,
      project: this.refs.project.value,
    }
    for (let field in data) {
      if (data[field] == '') {
        alert(`Please enter your ${field}`);
        next = false;
        break;
      } else {
        next = true;
      }
    }
    if (next) {
      this.props.saveIntro(data);
      this.props.nextStep()
    }
  }

  render() {
    return(
      <div className='formSteps formIntro'>
        <label>What's your name?</label>
        <input type='text' ref='name' defaultValue={this.props.name}></input>

        <label>What's your email?</label>
        <input type='email' ref='email' defaultValue={this.props.email}></input>

        <label>What are you building?</label>
        <input type='text' ref='project' defaultValue={this.props.project}></input>

        <button className='nextBtn' onClick={this.saveAndContinue.bind(this)}>
          <i className='fa fa-arrow-right'></i>
        </button>
      </div>
    )
  }
}
