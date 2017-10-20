import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import {Image, Button, Divider, Grid} from 'semantic-ui-react'
import '../css/master.css';
import CaseStudyIndex from '../components/case-study-index';

export default class Work extends React.Component {
  render() {
    return (
      <div>
        <div id="header" style={{
          margin: `0 auto`,
          maxWidth: '90%',
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0
        }}>
          <h1 style={{
            paddingTop: '50px'
          }}>
            <u>Make it tight. Make it right.</u>
          </h1>
          <p style={{
            fontSize: '24px',
            paddingTop: '25px'
          }}>We work side-by-side with our clients to create something real.</p>
        </div>
        <Grid columns={2} stackable style={{
          backgroundColor: 'white',
          marginTop: '150px'
        }}>
          <Grid.Row className="grid-row">
            <Grid.Column >
              <CaseStudyIndex imgUrl={'https://s3.amazonaws.com/pearlventures/memegod_screenshot.png'} title={'Memes Against Friends'} headline={'Compete with your friends to make the best memes'} description={'Our team considered the ubiquity of memes in our digital world and wanted to experiment with a fun way to get people together to create memes'} to={'/memes-against-friends-case-study/'} color={'#00EC7A'}/>
            </Grid.Column>
            <Grid.Column >
              <CaseStudyIndex imgUrl={'https://s3.amazonaws.com/pearlventures/maxicom_screenshot.png'} title={'Get paid for your network'} headline={'Get Paid for your Network'} description={'We were asked to bring life to a business model. Meet Maxicom, the platform that allows you make money from referrals.'} to={'/maxicom-case-study/'} color={'#00C7FF'}/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className="grid-row">
            <Grid.Column >
              <CaseStudyIndex imgUrl={'https://s3.amazonaws.com/pearlventures/durite_screenshot.png'} title={'Durite'} headline={'Pioneering cutting edge manufacturing'} description={'We were tasked with creating the marketing site for a manufacturer in New York that specializes in creating custom natural-like materials'} to={'/durite-case-study/'} color={'#FF0200'}/>
            </Grid.Column>
            <Grid.Column >
              <CaseStudyIndex imgUrl={'https://s3.amazonaws.com/pearlventures/hype_screenshot.png'} title={'Memes Against Friends'} headline={'Get exclusive access to the hottest clubs in NYC'} description={'We were disastisfied with the way nightlife has operated and were inspired to create a paltform to make planning a great night out easy'} to={'/hype-case-study/'} color={'#B5A550'}/>
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
