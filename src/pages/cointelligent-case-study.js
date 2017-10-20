import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import {Image, Button, Divider, Grid} from 'semantic-ui-react'
import '../css/master.css';
import Slides from '../components/slides';
import Summary from '../components/case-study-summary';
import Contributions from '../components/contributions';
import WorkWithUs from '../components/work-with-us';

export default class CointelligentCaseStudy extends React.Component {
  render() {
    return (
      <div>
        <Summary
          title='COINTELLIGENT'
          headline='The most beautiful app for crypto news, prices, trends, and analysis'
          description='Everything you need to make sense of the crypto world. Understanding the crypto world is complicated, Cointelligent combines all the most important info into one integrated and simple interface'
          url='http://cointelligent.io'
          imgUrl='https://s3.amazonaws.com/waverly-marketing-site/cointelligent.png'
          color='#00EC7A'
        />

        <Contributions
          left={['Strategy',
                 'Product Roadmapping',
                 'User Research',
                 'Design',
                 'Branding']}
          right={['Resposive Web Development',
                  'Software Application Architecture',
                  'iOS and Android Development',
                  'Quality Assurance',
                  'Analytics & Optimization']}
        />

        <Slides
          urls={['https://s3.amazonaws.com/waverly-marketing-site/Cointelligent+1.png',
                 'https://s3.amazonaws.com/waverly-marketing-site/Cointelligent+2.png',
                 'https://s3.amazonaws.com/waverly-marketing-site/Cointelligent+3.png',
                 'https://s3.amazonaws.com/waverly-marketing-site/Cointelligent+4.png'
                ]}/>

        <WorkWithUs />
      </div>
    )
  }
}
