import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import CaseStudyIndex from './case-study-index';

export default () => {
  return(
    <div className='entry3 content works' id='work'>
      <CaseStudyIndex
        imgUrl='url("https://s3.amazonaws.com/waverly-marketing-site/cointelligent-case-study.png")'
        title={'Cointelligent'}
        others={'iOS, Server, Design'}
        to={'/#'}
      />
      <CaseStudyIndex
        imgUrl='url("https://s3.amazonaws.com/waverly-marketing-site/memes-case-study.png")'
        title={'MEME GOD'}
        others={'iOS, Server, Design'}
        to={'/#'}
      />
      <CaseStudyIndex
        imgUrl='url("https://s3.amazonaws.com/waverly-marketing-site/aware-case-study.png")'
        title={'AWARE'}
        others={'iOS, Server, Design'}
        to={'/#'}
      />

    </div>
  )
}
