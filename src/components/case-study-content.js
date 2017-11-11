import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import '../css/case-study.css';

import wordArt from '../css/word_art.svg';
import Works from './works';

export default (props) => {
  return(
    <div>
      <div className='content'>
        <h2>CLIENT {props.client}</h2>
        <h3>{props.headline}</h3>
        <p>{props.others}</p>
        <a style={{borderBottom:`2px solid ${props.color}`}} href={props.website}>Visit website</a>
        <div className="projectContent">
          <img src={props.imgUrl} id="iphone" style={{margin: 'auto'}}/>
        </div>
      </div>

      <div>
        <h2>MORE WORK</h2>
        <Works />
      </div>

      <div className='footer'>
        <img src={wordArt} alt='Waverly &Co'></img>
      </div>
    </div>
  )
}
