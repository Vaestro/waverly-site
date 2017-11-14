import React, { Component } from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import CaseStudyTop from '../components/case-study-top';
import CaseStudyBtm from '../components/case-study-btm';

export default class MemesCaseStudy extends Component {
  render() {
    return(
      <div>
        <div className='content'>
          <CaseStudyTop
            client='AWARE'
            headline='CHANGLENGE YOUR FRIENDS FOR GOOD'
            others='iOS, Server, Design'
            color='#00C7FF'
            website='http://www.awareapp.co/'
            imgUrl='https://s3.amazonaws.com/pearlventures/aware_screenshot.png'
            challenge='Help design a startup venture and digital product that connects investors to companies making a positive impact in the world.'
            outcome='Swell, a fully-backed startup and impact investment platform that allows consumers to invest in portfolios of stocks that align with their values.'
          />
        </div>

       <CaseStudyBtm />
      </div>
    )
  }
}
