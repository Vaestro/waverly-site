import React, { Component } from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import CaseStudyTop from '../components/case-study-top';
import CaseStudyBtm from '../components/case-study-btm';

export default class CointelligentCaseStudy extends Component {
  render() {
    return(
      <div>
        <div className='content'>
          <CaseStudyTop
            client='COINTELLIGENT'
            headline='The most beautiful app for crypto news, prices, trends, and analysis'
            others='iOS, Server, Design'
            color='#00C7FF'
            website='http://www.cointelligent.io/'
            imgUrl='https://s3.amazonaws.com/waverly-marketing-site/cointelligent.png'
            challenge='Design a digital product to help a mainstream audience understand the new world of cryptocurrencies'
            outcome='Cointelligent, an iOS app that combines all the most important info into one integrated and simple interface'
          />
        </div>

       <CaseStudyBtm />
      </div>
    )
  }
}
