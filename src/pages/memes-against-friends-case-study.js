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
          type='LAB'
          name='MEMES AGAINST FRIENDS'
            headline='A memes party game you play with your friends'
            others='iOS, Server, Design'
            color='#00EC7A'
            website='http://thememegod.com'
            imgUrl='https://s3.amazonaws.com/pearlventures/memegod_screenshot.png'
            challenge='Our studio couldnt get enough of memes so we wanted to create a game that would allow us to endlessly create and share memes with our friends'
            outcome='Memes Against Friends: An app designed and developed exclusively for iMessage, centered on the idea of creating and sharing memes together in a fun way that has never been done before.'
          />
        </div>

       <CaseStudyBtm />
      </div>
    )
  }
}
