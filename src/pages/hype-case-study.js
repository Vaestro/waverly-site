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

// import React from "react"
// import Link from "gatsby-link"
// import Helmet from "react-helmet"
// import {Image, Button, Divider, Grid} from 'semantic-ui-react'
// import '../css/master.css';
// import Slides from '../components/slides';
// import Summary from '../components/case-study-summary';
// import Contributions from '../components/contributions';
// import WorkWithUs from '../components/work-with-us';
//
// export default class HypeCaseStudy extends React.Component {
//   render() {
//     return (
//       <div>
//         <Summary title='HYPE' headline='Discover the Best Parties in NYC' description='Coming soon.' url='http://www.gethype.co' imgUrl='https://s3.amazonaws.com/pearlventures/hype_screenshot.png' color='#B5A550'/>
//
//         <Contributions left={['Strategy', 'Product Roadmapping', 'User Research', 'Design', 'Branding']} right={['Resposive Web Development', 'Software Application Architecture', 'Quality Assurance', 'Analytics & Optimization']}/>
//
//         <WorkWithUs/>
//       </div>
//     )
//   }
// }
