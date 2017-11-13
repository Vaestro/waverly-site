import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import '../css/case-study.css';

import wordArt from '../css/word_art.svg';

export default (props) => {
  return(
    <div>
      <div className='logoWork'><Link to='/'><h1>| OUR WORK</h1></Link></div>
      <div className='row1'>
        <div className='colL'>
          <h2>CLIENT &nbsp;&nbsp;&nbsp;{props.client}</h2>
          <h3>{props.headline}</h3>
          <p>{props.others}</p>
          <a style={{borderBottom:`0.5vw solid ${props.color}`}} href={props.website}>Visit website</a>
        </div>
        <div className='colR'>
          <div className='casePhoto'>
            <img src={props.imgUrl} alt={props.client}/>
          </div>
        </div>
        <div className='clear'></div>
      </div>
      <div className='row2'>
        <div className='colL'>
          <h2>THE CHALLENGE</h2>
          <p>{props.challenge}</p>
        </div>
        <div className='colR'>
          <h2>THE OUTCOME</h2>
          <p>{props.outcome}</p>
        </div>
        <div className='clear'></div>
      </div>
    </div>
  )
}
