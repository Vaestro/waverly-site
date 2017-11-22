import React, { Component } from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

export default class Budget extends Component {
  state = { borderV0: '1px solid #fff', borderV1: '1px solid #fff',
            borderB0: '1px solid #ddd', borderB1: '1px solid #ddd', borderB2: '1px solid #ddd',
            display0: 'none', display1: 'none', display2: 'none'}

  selectVersion() {
    let versions = document.getElementsByName('version');
    for (let i=0; i<versions.length; i++) {
      let borderVX = `borderV${i}`;
      if(versions[i].checked==true) {
        this.setState({ [borderVX]: '1px solid #656BF1' })
      } else {
        this.setState({ [borderVX]: '1px solid #fff' })
      }
    }
  }

  selectBudget() {
    let bgs = document.getElementsByName('budget');
    for (let i=0; i<bgs.length; i++) {
      let borderBX = `borderB${i}`;
      let displayX = `display${i}`;
      if(bgs[i].checked==true) {
        this.setState({ [borderBX]: '1.5px solid #656BF1', [displayX]: 'block' })
      } else {
        this.setState({ [borderBX]: '1px solid #ddd', [displayX]: 'none' })
      }
    }
  }

  saveAndBack(e) {
    e.preventDefault()
    this.props.preStep()
  }

  saveAndContinue(e) {
    e.preventDefault()

    let versions = document.getElementsByName('version');
    let version = null;
    for (let i=0; i<versions.length; i++) {
      if(versions[i].checked==true) {
        version = versions[i].value;
        break;
      }
    }

    let bgs = document.getElementsByName('budget');
    let bg = null;
    for (let i=0; i<bgs.length; i++) {
      if(bgs[i].checked==true) {
        bg = bgs[i].value;
        break;
      }
    }

    if (version == null) {
      alert('Please answer the question')
    } else if (bg == null) {
      alert('Please select your project budget')
    } else {
      this.props.saveBudget(version,bg);
      this.props.nextStep()
    }
  }

  render() {
    return(
      <div className='formSteps formBudget'>
        <label>Is this a new or existing project?</label>
        <div className='versionOption' style={{border:`${this.state.borderV0}`}}>
          <input type='radio' name='version' value='1' className='radioSmall' onClick={this.selectVersion.bind(this)}></input>
          <h2>YES</h2>
        </div>
        <div className='versionOption' style={{border:`${this.state.borderV1}`}}>
          <input type='radio' name='version' value='2' className='radioSmall' onClick={this.selectVersion.bind(this)}></input>
          <h2>NO</h2>
        </div>

        <label>What's your budget?</label>
        <input type='radio' name='budget' value='1' className='radioBig' onClick={this.selectBudget.bind(this)}></input>
        <div className='typeOption' style={{border:`${this.state.borderB0}`}}>
          <div className='budgetInfo'>
            <h2>PERSONAL</h2>
            <p>$1,000 - $5,000</p>
          </div>
          <div className='check' style={{display:`${this.state.display0}`}}>
            <i className='fa fa-check' aria-hidden='true'></i>
          </div>
        </div>
        <input type='radio' name='budget' value='2' className='radioBig' onClick={this.selectBudget.bind(this)}></input>
        <div className='typeOption' style={{border:`${this.state.borderB1}`}}>
          <div className='budgetInfo'>
            <h2>BUSINESS</h2>
            <p>$5,000 - $20,000</p>
          </div>
          <div className='check' style={{display:`${this.state.display1}`}}>
            <i className='fa fa-check' aria-hidden='true'></i>
          </div>
        </div>
        <input type='radio' name='budget' value='3' className='radioBig' onClick={this.selectBudget.bind(this)}></input>
        <div className='typeOption' style={{border:`${this.state.borderB2}`}}>
          <div className='budgetInfo'>
            <h2>CORPORATE</h2>
            <p>$20,000+</p>
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
