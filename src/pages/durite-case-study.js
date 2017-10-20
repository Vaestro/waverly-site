import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import {Image, Button, Divider, Grid} from 'semantic-ui-react'
import '../css/master.css';
import Slides from '../components/slides';
import Summary from '../components/case-study-summary';
import Contributions from '../components/contributions';
import WorkWithUs from '../components/work-with-us';

export default class DuriteCaseStudy extends React.Component {
  render() {
    return (
      <div>
        <Summary title='DURITE' headline='The Best in Terrazo Manufacturing' description='Coming soon.' url='http://duriteusa.com' imgUrl='https://s3.amazonaws.com/pearlventures/durite_screenshot.png' color='#FF0200'/>

        <Contributions left={['Strategy', 'Product Roadmapping', 'User Research', 'Design', 'Branding']} right={['Resposive Web Development', 'Software Application Architecture', 'Quality Assurance', 'Analytics & Optimization']}/>

        <WorkWithUs/>
      </div>
    )
  }
}
