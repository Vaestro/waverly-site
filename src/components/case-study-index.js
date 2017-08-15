import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import {Image, Button, Divider, Grid} from 'semantic-ui-react';

export default (props) => {
  return(
    <Grid.Column >
      <div>
        <div className="projectContent">
          <Image src={props.imgUrl} id="iphone"/>
          <h3 style={{
            color: `${props.color}`,
            fontSize: '20px',
            fontWeight: '700',
            marginBottom: 10
          }}>{props.title}</h3>
          <p style={{
            fontSize: '28px',
            marginBottom: 10,
            fontWeight: '400'
          }}>{props.headline}</p>
          <p>{props.description}</p>
          <Link style={{
            fontSize: '20px',
            fontWeight: 100,
            color: 'black',
            textDecoration: 'none',
            marginBottom: 10,
            fontWeight: '400',
            letterSpacing: '-0.28px',
            borderBottom: `solid 5px ${props.color}`
          }} to={props.to}>View case study</Link>
        </div>
      </div>
    </Grid.Column>
  )
}
