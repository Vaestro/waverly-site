import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import {Image, Button, Divider, Grid} from 'semantic-ui-react';

export default (props) => {
  return(
    <div>
      <Grid columns={2} stackable style={{
        backgroundColor: 'white',
        marginTop: '50px'
      }}>
        <Grid.Row className="grid-row">
          <Grid.Column>
            <h3 style={{
              color: '#000000',
              fontSize: '48px',
              fontWeight: '700',
              marginBottom: 10,
              lineHeight: '48px',
              letterSpacing: '-0.67px'
            }}>{props.title}</h3>
            <p style={{
              fontSize: '28px',
              marginBottom: 50,
              fontWeight: '400'
            }}>{props.headline}</p>
            <p>{props.description}</p>
            <a style={{
              fontSize: '20px',
              fontWeight: 100,
              color: 'black',
              textDecoration: 'none',
              marginBottom: 10,
              fontWeight: '400',
              letterSpacing: '-0.28px',
              borderBottom: `solid 5px ${props.color}`
            }} href={props.url}>Visit website</a>
          </Grid.Column>
          <Grid.Column >
            <div>
              <div className="projectContent">
                <Image src={props.imgUrl} id="iphone" style={{margin: 'auto'}}/>
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}
