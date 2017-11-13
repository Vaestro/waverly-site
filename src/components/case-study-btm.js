import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import '../css/case-study.css';

import wordArt from '../css/word_art.svg';
import Works from './works';

export default (props) => {
  return(
    <div>
      <div className='moreWork'>
        <h2>MORE WORK</h2>
        <Works />
      </div>

      <div className='footer'>
        <Link to='/'><img src={wordArt} alt='Waverly &Co'></img></Link>
        <p>Let's make something happen</p>
      </div>
    </div>
  )
}
