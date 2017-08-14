import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import {Image, Button, Divider, Grid} from 'semantic-ui-react';

export default (props) => {
  return(
    <div>
      <Grid columns={2} stackable>

        <Grid.Row className="grid-row">
          <Grid.Column >
            <h3 style={{
              color: '#000',
              fontSize: '20px',
              fontWeight: '700',
              marginBottom: 10
            }}>Interested in working with us?</h3>

            <a id="typeform-button" className="typeform-share button" href="https://dopeatlas.typeform.com/to/lyD8J5" data-mode="drawer_left" target="_blank">Get in touch today
            </a>

            <script dangerouslySetInnerHTML={{
              __html: ` (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })()`
            }}/>
          </Grid.Column>

          <Grid.Column></Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}
