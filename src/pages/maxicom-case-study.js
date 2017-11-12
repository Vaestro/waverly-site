import React, { Component } from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import CaseStudyContent from '../components/case-study-content';

export default class MemesCaseStudy extends Component {
  render() {
    return(
      <div>
       <CaseStudyContent
         client='AWARE'
         headline='CHANGLENGE YOUR FRINED FOR GOOD'
         others='iOS, Server, Design'
         color='#00C7FF'
         website='http://www.awareapp.co/'
         imgUrl='https://s3.amazonaws.com/pearlventures/aware_screenshot.png'
       />
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
// export default class MaxicomCaseStudy extends React.Component {
//   render() {
//     return (
//       <div>
//         <Summary title='MAXICOM' headline='Referral Marketing Platform' description='Coming soon.' url='http://www.maxwork.co' imgUrl='https://s3.amazonaws.com/pearlventures/maxicom_screenshot.png' color='#00C7FF'/>
//
//         <Contributions left={['Strategy', 'Product Roadmapping', 'User Research', 'Design', 'Branding']} right={['Resposive Web Development', 'Software Application Architecture', 'Quality Assurance', 'Analytics & Optimization']}/>
//
//         <WorkWithUs/>
//       </div>
//     )
//   }
// }
