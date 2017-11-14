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
            type='CLIENT'
            name='MAXICOM'
            headline='Worlds first referral marketing platform'
            others='Web, Server, Design'
            color='#00C7FF'
            website='http://www.awareapp.co/'
            imgUrl='https://s3.amazonaws.com/pearlventures/maxicom_screenshot.png'
            challenge='Help design a startup venture and digital product that offers an ecosystem for referrers to earn a commission on referrals'
            outcome='Maxicom, a web app built with Ruby on Rails that allowed users to sign up as finders or businesses. Finders could refer business on the site to any of the listed businesses and be rewarded with comission on each transaction'
          />
        </div>

       <CaseStudyBtm />
      </div>
    )
  }
}
