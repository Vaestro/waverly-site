import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import particlesConfig from '../json/particles-config.json';
import {Image, Button, Divider, Grid} from 'semantic-ui-react'
import '../css/particle-styles.css';
import '../css/master.css';

export default class Index extends React.Component {
  componentDidMount() {
    if (window) {
      console.log(this)
      require.ensure('particles.js', () => {
        this.Particles = require('particles.js');
        console.log(this.Particles)

        this.Particles('particles-header', particlesConfig);
      }, 'particles.js');
    }
  }

  componentWillUnmount() {
    if (this.Particles) {}
  }

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
            WE ARE A DIGITAL PRODUCT<br/>
            STUDIO IN NYC
          </h1>
          <p style={{
            fontSize: '24px',
            paddingTop: '0'
          }}>We team up with companies to make<br/>
            meaningful digital experiences</p>

          <div id="particles-header"></div>
        </div>
        <Grid columns={2} stackable style={{
          backgroundColor: 'white',
          marginTop: '150px'
        }}>
          <Grid.Row className="grid-row">
            <Grid.Column >
              <div>
                <div className="projectContent">
                  <Image src="https://s3.amazonaws.com/pearlventures/aware_screenshot.png" id="iphone"/>

                  <h3 style={{
                    color: '#00C7FF',
                    fontSize: '20px',
                    fontWeight: '700',
                    marginBottom: 10
                  }}>Aware</h3>
                  <p style={{
                    fontSize: '28px',
                    marginBottom: 10,
                    fontWeight: '400'
                  }}>Challenge your friends for charity</p>
                  <p>We were asked to bring life to a business model. Meet Aware, the app that allows you to challenge your friends for charity that we built and designed from scratch.</p>
                  <Link style={{
                    fontSize: '20px',
                    fontWeight: 100,
                    color: 'black',
                    textDecoration: 'none',
                    marginBottom: 10,
                    fontWeight: '400',
                    letterSpacing: '-0.28px',
                    borderBottom: 'solid 5px #00C7FF'
                  }} to="/aware-case-study/">View case study</Link>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>

              <div className="projectContainer">
                <div className="projectContent">

                  <Image src='https://s3.amazonaws.com/pearlventures/memegod_screenshot.png' id="iphone"/>
                  <h3 style={{
                    color: '#00EC7A',
                    fontSize: '20px',
                    fontWeight: '700',
                    marginBottom: 10
                  }}>Memes Against Friends</h3>
                  <p style={{
                    fontSize: '28px',
                    marginBottom: 10,
                    fontWeight: '400'
                  }}>Compete with your friends to make the best memes</p>
                  <p>Our team considered the ubiquity of memes in our digital world and wanted to experiment with a fun way to get people together to create memes</p>
                  <Link style={{
                    fontSize: '20px',
                    fontWeight: 100,
                    color: 'black',
                    textDecoration: 'none',
                    marginBottom: 10,
                    fontWeight: '400',
                    letterSpacing: '-0.28px',
                    borderBottom: 'solid 5px #00EC7A'
                  }} to="/memes-against-friends-case-study/">View case study</Link>
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column ></Grid.Column>
            <Grid.Column>
              <h3 style={{
                color: '#000',
                fontSize: '20px',
                fontWeight: '700',
                marginBottom: 10
              }}>Our Portfolio</h3>

              <Link style={{
                fontSize: '24px',
                fontWeight: 100,
                color: 'black',
                textDecoration: 'none',
                marginBottom: 10,
                fontWeight: '400'
              }} to="/work/">View more of our work</Link>
            </Grid.Column>
          </Grid.Row>
          <Divider/>
          <Grid.Row className="grid-row">
            <Grid.Column >
              <h3 style={{
                color: '#000',
                fontSize: '20px',
                fontWeight: '700',
                marginBottom: 10
              }}>Services</h3>
              <p style={{
                fontSize: '24px',
                marginBottom: 10,
                fontWeight: '400'
              }}>Discover your digital identity</p>
              <p>We learn through making. Then apply everything we know to create game-changing digital products and services for clients. <br/><br/>And we always do it collaboratively, through expertly coached teamwork. You and us, working together, discovering answers to the biggest questions your business faces. Then rapidly bringing them to life.</p>
            </Grid.Column>
            <Grid.Column>
              <h3 style={{
                color: '#000',
                fontSize: '20px',
                fontWeight: '700',
                marginBottom: 10
              }}>How we can help you</h3>
              <p style={{
                fontSize: '20px',
                marginBottom: 10
              }}>Develop a minimum viable product</p>
              <Divider/>
              <p style={{
                fontSize: '20px',
                marginBottom: 10
              }}>Improve and grow your existing product</p>
              <Divider/>
              <p style={{
                fontSize: '20px',
                marginBottom: 10
              }}>Integrate us as your on-demand team</p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Image src="https://s3.amazonaws.com/pearlventures/studio%403x.png" id="studio"/>
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
