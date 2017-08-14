import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import {Image, Button, Divider, Grid} from 'semantic-ui-react'
import '../css/master.css';
import Slider from 'react-slick';
import Slides from './aware-slides';
import Summary from '../components/case-study-summary';
import Contributions from '../components/contributions';
import WorkWithUs from '../components/work-with-us';

export default class MemesCaseStudy extends React.Component {
  render() {
    return (
      <div>
        <Summary
          title='AWARE'
          headline='Challenge your friends for charity'
          description='We paired up with a brand new fundraising company, to help them design and build Aware, a social charity app that allows users to challenge their friends for charity. We designed the whole company from scratch, from iOS and web interface to branding.'
          url='http://www.awareapp.co/'
          imgUrl='https://s3.amazonaws.com/pearlventures/aware_screenshot.png'
          color='#00C7FF'
        />

        <Contributions />

        <Grid.Row className="grid-row">
            <div style={{width:'80%', margin:'auto', borderTop:'3px solid #00C7FF'}}></div>
            <Slides />
        </Grid.Row>

        <WorkWithUs />
      </div>
    )
  }
}
