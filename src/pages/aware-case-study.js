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
// export default class MemesCaseStudy extends React.Component {
//   render() {
//     return (
//       <div>
//         <Summary
//           title='AWARE'
//           headline='Challenge your friends for charity'
//           description='We paired up with a brand new fundraising company, to help them design and build Aware, a social charity app that allows users to challenge their friends for charity. We designed the whole company from scratch, from iOS and web interface to branding.'
//           url='http://www.awareapp.co/'
//           imgUrl='https://s3.amazonaws.com/pearlventures/aware_screenshot.png'
//           color='#00C7FF'
//         />
//
//         <Contributions
//           left={['Strategy',
//                  'Product Roadmapping',
//                  'User Research',
//                  'Design',
//                  'Branding']}
//           right={['Resposive Web Development',
//                   'Software Application Architecture',
//                   'iOS and Android Development',
//                   'Quality Assurance',
//                   'Analytics & Optimization']}
//         />
//
//         <Slides
//           urls={['https://s3.amazonaws.com/aware-contentdelivery-mobilehub-479298082/Charity+Picker.png',
//                  'https://s3.amazonaws.com/aware-contentdelivery-mobilehub-479298082/Discovery+Feed+Copy.png',
//                  'https://s3.amazonaws.com/aware-contentdelivery-mobilehub-479298082/Notifications.png',
//                  'https://s3.amazonaws.com/aware-contentdelivery-mobilehub-479298082/Post.png'
//                ]}/>
//
//         <WorkWithUs />
//       </div>
//     )
//   }
// }
