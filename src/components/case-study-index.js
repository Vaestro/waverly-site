import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

export default (props) => {
  return(
    <div className='entry3 caseStudy' style={{ backgroundImage:`${props.imgUrl}`, backgroundSize:'cover' }}>
      <Link to={props.to}>
        <h2>{props.title}</h2>
        <h3>Case Study <i className='fa fa-arrow-right' aria-hidden='true'></i></h3>
        <p>{props.others}</p>
      </Link>
    </div>
  )
}
