import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import {Image, Button, Divider, Grid} from 'semantic-ui-react'
import '../css/master.css';

export default class MemesCaseStudy extends React.Component {
  render() {
    return (
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
                lineHeight:'48px',
                letterSpacing: '-0.67px'
              }}>Memes Against Friends</h3>
              <p style={{
                fontSize: '28px',
                marginBottom: 50,
                fontWeight: '400'
              }}>A memes party game you play with your friends</p>
              <p>We wanted to combine our studio’s interest in memes, with the best platform for groups and ended up with Memes Against Friends: An app designed and developed exclusively for iMessage, centered on the idea of creating and sharing memes together in a fun way that has never been done before</p>


              <a style={{
                fontSize: '20px',
                fontWeight: 100,
                color:'black',
                textDecoration:'none',
                marginBottom: 10,
                fontWeight: '400',
                letterSpacing: '-0.28px',
                borderBottom: 'solid 5px #00EC7A'

              }} href="http://thememegod.com">Visit website</a>
            </Grid.Column>
            <Grid.Column >
              <div>
                <div className="projectContent">
                  <Image src='https://s3.amazonaws.com/pearlventures/memegod_screenshot.png' id="iphone"/>
                </div>
              </div>
            </Grid.Column>

          </Grid.Row>



        </Grid>
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
}
