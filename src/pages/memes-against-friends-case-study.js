import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import {Image, Button, Divider, Grid} from 'semantic-ui-react'
import '../css/master.css';
import Slides from '../components/slides';
import Summary from '../components/case-study-summary';
import Contributions from '../components/contributions';
import WorkWithUs from '../components/work-with-us';

export default class MemesCaseStudy extends React.Component {
  render() {
    return (
      <div>
        <Summary
          title='MEMES AGAINST FRIENDS'
          headline='A memes party game you play with your friends'
          description='We wanted to combine our studio’s interest in memes, with the best platform for groups and ended up with Memes Against Friends: An app designed and developed exclusively for iMessage, centered on the idea of creating and sharing memes together in a fun way that has never been done before.'
          url='http://thememegod.com'
          imgUrl='https://s3.amazonaws.com/pearlventures/memegod_screenshot.png'
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
          urls={['https://s3.amazonaws.com/waverly-marketing-site/Screenshot+1.png',
                 'https://s3.amazonaws.com/waverly-marketing-site/Screenshot+2.png',
                 'https://s3.amazonaws.com/waverly-marketing-site/Screenshot+3.png',
                 'https://s3.amazonaws.com/waverly-marketing-site/Screenshot+4.png',
                 'https://s3.amazonaws.com/waverly-marketing-site/Screenshot+5.png'
                ]}/>

        <WorkWithUs />
      </div>
    )
  }
}
