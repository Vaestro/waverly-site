import React, { Component } from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

export default class Type extends Component {
  state = { border0: '1px solid #ddd', border1: '1px solid #ddd', border2: '1px solid #ddd',
            display0: 'none', display1: 'none', display2: 'none'}

  select() {
    let types = document.getElementsByName('type');
    for (let i=0; i<types.length; i++) {
      let borderX = `border${i}`;
      let displayX = `display${i}`;
      if(types[i].checked==true) {
        this.setState({ [borderX]: '1.5px solid #656BF1', [displayX]: 'block' })
      } else {
        this.setState({ [borderX]: '1px solid #ddd', [displayX]: 'none' })
      }
    }
  }

  saveAndBack(e) {
    e.preventDefault()
    this.props.preStep()
  }

  saveAndContinue(e) {
    e.preventDefault()

    let types = document.getElementsByName('type');
    let type = null;
    for (let i=0; i<types.length; i++) {
      if(types[i].checked==true) {
        type = types[i].value;
        break;
      }
    }
    if (type == null) {
      alert('Please select a type')
    } else {
      this.props.saveType(type);
      this.props.nextStep()
    }
  }

  render() {
    return(
      <div className='formSteps formType'>
        <label>What type of project is it?</label>
        <input type='radio' name='type' value='1' className='radioBig' onClick={this.select.bind(this)}></input>
        <div className='typeOption' style={{border:`${this.state.border0}`}}>
          <div className='typeImg'></div>
          <div className='typeInfo'>
            <h2>Mobile Development</h2>
            <p>You need a iOS or Android application</p>
          </div>
          <div className='check' style={{display:`${this.state.display0}`}}>
            <i className='fa fa-check' aria-hidden='true'></i>
          </div>
        </div>
        <input type='radio' name='type' value='2' className='radioBig' onClick={this.select.bind(this)}></input>
        <div className='typeOption' style={{border:`${this.state.border1}`}}>
          <div className='typeImg'></div>
          <div className='typeInfo'>
            <h2>Web Development</h2>
            <p>You need a website/web app that can be viewed through a browser</p>
          </div>
          <div className='check' style={{display:`${this.state.display1}`}}>
            <i className='fa fa-check' aria-hidden='true'></i>
          </div>
        </div>
        <input type='radio' name='type' value='3' className='radioBig' onClick={this.select.bind(this)}></input>
        <div className='typeOption' style={{border:`${this.state.border2}`}}>
          <div className='typeImg'></div>
          <div className='typeInfo'>
            <h2>UI/UX Design</h2>
            <p>You need a winning design for a new product</p>
          </div>
          <div className='check' style={{display:`${this.state.display2}`}}>
            <i className='fa fa-check' aria-hidden='true'></i>
          </div>
        </div>
        
        <button className='backBtn' onClick={this.saveAndBack.bind(this)}>
          <i className='fa fa-arrow-left'></i>
        </button>
        <button className='nextBtn' onClick={this.saveAndContinue.bind(this)}>
          <i className='fa fa-arrow-right'></i>
        </button>
      </div>
    )
  }
}
