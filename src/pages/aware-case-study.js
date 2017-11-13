import React, { Component } from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import CaseStudyTop from '../components/case-study-top';
import CaseStudyBtm from '../components/case-study-btm';

export default class AwareCaseStudy extends Component {
  render() {
    return(
      <div>
        <div className='content'>
          <CaseStudyTop
            client='AWARE'
            headline='CHALLENGE YOUR FRIENDS FOR GOOD'
            others='iOS, Server, Design'
            color='#00C7FF'
            website='http://www.awareapp.co/'
            imgUrl='https://s3.amazonaws.com/pearlventures/aware_screenshot.png'
            challenge='Help design a startup venture and digital product that makes it easy and fun for anyone to start a viral campaign for a charitable cause'
            outcome='Aware, an iOS app that gives users to video challenge their friends to raise awareness and donations in the app for their favorite charities'
          />
        </div>

       <CaseStudyBtm />
      </div>
    )
  }
}
