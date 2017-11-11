import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import CaseStudyIndex from './case-study-index';

export default () => {
  return(
    <div className='entry3 content works' id='work'>
      <CaseStudyIndex
        imgUrl={''}
        title={'AWARE'}
        others={'iOS, Server, Design'}
        to={'/aware-case-study/'}
      />
      <CaseStudyIndex
        imgUrl={''}
        title={'MEME GOD'}
        others={''}
        to={'/memes-against-friends-case-study/'}
      />
      <CaseStudyIndex
        imgUrl={''}
        title={'AWARE'}
        others={'iOS, Server, Design'}
        to={'/aware-case-study/'}
      />
      <CaseStudyIndex
        imgUrl={''}
        title={'AWARE'}
        others={'iOS, Server, Design'}
        to={'/aware-case-study/'}
      />
    </div>
  )
}
