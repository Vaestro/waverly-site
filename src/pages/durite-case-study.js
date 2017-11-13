import React, { Component } from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import CaseStudyTop from '../components/case-study-top';
import CaseStudyBtm from '../components/case-study-btm';
export default class DuriteCaseStudy extends Component {
  render() {
    return(
      <div>
        <div className='content'>
          <CaseStudyTop
          type='CLIENT'
          name='DURITE'
            headline='The Best in Terrazo Manufacturing'
            others='Web, Server, Design'
            color='#00C7FF'
            website='http://www.duriteusa.com/'
            imgUrl='https://s3.amazonaws.com/pearlventures/durite_screenshot.png'
            challenge='We were tasked with overhauling the website for one of the largest manufacturers of Terrazo in the USA.'
            outcome='We created a brand new sleek website for Durites potential customers that educated them on Terrazo and provided them an inquiry form to provide Durite with more qualified leads.'
          />
        </div>

       <CaseStudyBtm />

      </div>
    )
  }
}
