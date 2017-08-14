import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import {Image, Button, Divider, Grid} from 'semantic-ui-react'
import '../css/master.css';
import Slider from 'react-slick';
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

        <Contributions />

        <Slides
          urls={['https://s3.amazonaws.com/memegod/Device+1%402x.png',
                 'https://s3.amazonaws.com/memegod/Device+2%402x.png',
                 'https://s3.amazonaws.com/memegod/Device+3%402x.png',
                 'https://s3.amazonaws.com/memegod/Device+4%402x.png',
                 'https://s3.amazonaws.com/memegod/Device+5%402x.png'
                ]}/>

        <WorkWithUs />
      </div>
    )
  }
}
