import React, { Component } from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import '../css/form.css';

import Intro from '../components/form-intro';
import Type from '../components/form-type';
import Budget from '../components/form-budget';
import Review from '../components/form-review';
import Success from '../components/form-success';

export default class startProject extends Component {
  state = { step:1,
            name:'',
            email:'',
            project:''
          }

  preStep() {
    console.log(this.state);
    let step = this.state.step;
    if (step > 1) {
      step = step - 1;
      this.setState({ step })
    }
  }

  nextStep() {
    let step = this.state.step;
    if (step < 5) {
      step = step + 1;
      this.setState({ step })
    }
  }

  saveIntro(data) {
    console.log(data);
    this.setState({ name:data.name, email:data.email, project:data.project});
    console.log(this.state);
  }

  saveType(type) {
    console.log(type);
    this.setState({ type });
    console.log(this.state);
  }

  saveBudget(version, budget) {
    console.log(version, budget);
    this.setState({ version, budget });
    console.log(this.state);
  }


  renderForms() {
    switch (this.state.step) {
			case 1:
				return <Intro
                  saveIntro={this.saveIntro.bind(this)}
                  nextStep={this.nextStep.bind(this)}
                  name={this.state.name}
                  email={this.state.email}
                  project={this.state.project}
                />
			case 2:
				return <Type
                  saveType={this.saveType.bind(this)}
                  preStep={this.preStep.bind(this)}
                  nextStep={this.nextStep.bind(this)}
                />
			case 3:
				return <Budget
                  saveBudget={this.saveBudget.bind(this)}
                  preStep={this.preStep.bind(this)}
                  nextStep={this.nextStep.bind(this)}
                />
			case 4:
				return <Review
                  name={this.state.name}
                  email={this.state.email}
                  project={this.state.project}
                  type={this.state.type}
                  version={this.state.version}
                  budget={this.state.budget}
                  preStep={this.preStep.bind(this)}
                  nextStep={this.nextStep.bind(this)}
                />
      case 5:
				return <Success
                  name={this.state.name}
                  email={this.state.email}
                  project={this.state.project}
                  type={this.state.type}
                  version={this.state.version}
                  budget={this.state.budget}
                />
		}
  }

  render() {
    return(
      <div className='content'>
        {this.renderForms.bind(this)()}
        {/* <button onClick={this.steps.bind(this)}>Next</button> */}
      </div>
    )
  }
}
