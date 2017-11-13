import React, { Component } from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import CaseStudyTop from '../components/case-study-top';
import CaseStudyBtm from '../components/case-study-btm';
export default class HypeCaseStudy extends Component {
  render() {
    return(
      <div>
        <div className='content'>
          <CaseStudyTop
          type='LAB'
          name='HYPE'
            headline='Discover the Best Parties in NYC'
            others='iOS, Web, Server, Design'
            color='#00C7FF'
            website='http://www.gethype.co/'
            imgUrl='https://s3.amazonaws.com/pearlventures/hype_screenshot.png'
            challenge='The nightlife industry operates under antiquated standards that leave partygoers worse off. We wanted to create an app that would make it easy for anyone to discover and access the best nightlife events with a tap of a button'
            outcome='Hype, an iOS app that made it easy to purchase a ticket, book premium table service, or match with a nightlife concierge at dozens of the best nightclubs in NYC'
          />
        </div>

       <CaseStudyBtm />
      </div>
    )
  }
}
