import React from 'react';
import Helmet from 'react-helmet';
import {Image, Button, Divider, Grid} from 'semantic-ui-react';

export default (props) => {
  return(
    <div>
      <Grid columns={2} stackable>
        <Grid.Row className="grid-row">
          <Grid.Column>
            <h4 style={{
              color: '#000000',
              fontSize: '20px',
              fontWeight: '600',
              lineHeight: '48px',
              letterSpacing: '-0.67px'
            }}>OUR CONTRIBUTIONS</h4>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid columns={2} stackable style={{
        backgroundColor: 'white'
      }}>
        <Grid.Row className="grid-row">
          <Grid.Column>
            <ul className='contributions'>
              <li>Strategy</li>
              <li>Product Roadmapping</li>
              <li>User Research</li>
              <li>Design</li>
              <li>Branding</li>
            </ul>
          </Grid.Column>
          <Grid.Column >
            <ul className='contributions'>
              <li>Resposive Web Development</li>
              <li>Software Application Architecture</li>
              <li>iOS and Android Development</li>
              <li>Quality Assurance</li>
              <li>Analytics & Optimization</li>
            </ul>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}
