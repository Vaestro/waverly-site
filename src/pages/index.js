import React, { Component } from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import '../css/master.css';

import wordArt from '../css/people.svg';
import Works from '../components/works';

export default class Index extends Component {
  render() {
    return(
      <div>
        <div className='entry1 content home' id='home'>
          <div className='homeText'>
            <h1>MAKE YOUR BIGGEST IDEAS HAPPEN</h1>
            <div className='bar'></div>
            <p>We are a full service digital product agency,<br/>
               delivering top-tier solutions for companies of all sizes.</p>
          </div>
          <div className='entry2'>
            <div className='homeImg'>
              <img src={wordArt} alt='Waverly &Co'></img>
            </div>
            <div className='clear'></div>
            <div className='socialMedia'>
              <a href='https://www.facebook.com/waverlyandco/'><i className='fa fa-facebook'></i></a>
              <a href='https://www.instagram.com/waverlycompany/'><i className='fa fa-instagram'></i></a>
              <a href='https://twitter.com/waverlyandco'><i className='fa fa-twitter'></i></a>
            </div>
          </div>
        </div>

        <Works />

        <div className='entry3 content contact' id='contact'>
          <h1>GET INSPIRED</h1>
          <p>Stay up to date with our latest developments</p>
          <div className="mc_embed_signup" dangerouslySetInnerHTML={{
              __html: '<form action="https://waverly.us16.list-manage.com/subscribe/post?u=1015f645f85b3308693f3b0c4&amp;id=7e53222a49" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate><div id="mc_embed_signup_scroll"><div class="mc-field-group"><input type="email" value="" placeholder="Your Email Address" name="EMAIL" class="required email" id="mce-EMAIL"><input type="submit" value="SUBSCRIBE" name="subscribe" id="mc-embedded-subscribe" class="button"></div><div id="mce-responses" class="clear"><div class="response" id="mce-error-response" style="display:none"></div><div class="response" id="mce-success-response" style="display:none"></div></div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--><div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_1015f645f85b3308693f3b0c4_7e53222a49" tabindex="-1" value=""></div></div></form>'
            }}></div>
        </div>
      </div>

















      // <div>
      //   <div id='header' style={{
      //     margin: `0 auto`,
      //     maxWidth: '90%',
      //     padding: `0px 1.0875rem 1.45rem`,
      //     paddingTop: 0
      //   }}>
      //     <h1 style={{
      //       paddingTop: '50px'
      //     }}>
      //       WE ARE A DIGITAL PRODUCT<br/>
      //       STUDIO IN NYC
      //     </h1>
      //     <p style={{
      //       fontSize: '24px',
      //       paddingTop: '0'
      //     }}>We team up with companies to make<br/>
      //       meaningful digital experiences</p>
      //
      //     <div id='particles-header'></div>
      //   </div>
      //
      //   <Grid columns={2} stackable style={{
      //     backgroundColor: 'white',
      //     marginTop: '150px'
      //   }}>
      //     <Grid.Row className='grid-row'>
      //       <CaseStudyIndex
      //         imgUrl={'https://s3.amazonaws.com/pearlventures/aware_screenshot.png'}
      //         title={'Aware'}
      //         headline={'Challenge your friends for charity'}
      //         description={'We were asked to bring life to a business model. Meet Aware, the app that allows you to challenge your friends for charity that we built and designed from scratch'}
      //         to={'/aware-case-study/'}
      //         color={'#00C7FF'}
      //       />
      //       <CaseStudyIndex
      //         imgUrl={'https://s3.amazonaws.com/pearlventures/memegod_screenshot.png'}
      //         title={'Memes Against Friends'}
      //         headline={'Compete with your friends to make the best memes'}
      //         description={'Our team considered the ubiquity of memes in our digital world and wanted to experiment with a fun way to get people together to create memes'}
      //         to={'/memes-against-friends-case-study/'}
      //         color={'#00EC7A'}
      //       />
      //     </Grid.Row>
      //
      //     <Grid.Row>
      //       <Grid.Column ></Grid.Column>
      //       <Grid.Column>
      //         <h3 style={{
      //           color: '#000',
      //           fontSize: '20px',
      //           fontWeight: '700',
      //           marginBottom: 10
      //         }}>Our Portfolio</h3>
      //         <Link style={{
      //           fontSize: '24px',
      //           fontWeight: 100,
      //           color: 'black',
      //           textDecoration: 'none',
      //           marginBottom: 10,
      //           fontWeight: '400'
      //         }} to='/work/'>View more of our work</Link>
      //       </Grid.Column>
      //     </Grid.Row>
      //     <Divider/>
      //     <Grid.Row className='grid-row'>
      //       <Grid.Column >
      //         <h3 style={{
      //           color: '#000',
      //           fontSize: '20px',
      //           fontWeight: '700',
      //           marginBottom: 10
      //         }}>Services</h3>
      //         <p style={{
      //           fontSize: '24px',
      //           marginBottom: 10,
      //           fontWeight: '400'
      //         }}>Discover your digital identity</p>
      //         <p>We learn through making. Then apply everything we know to create game-changing digital products and services for clients. <br/><br/>And we always do it collaboratively, through expertly coached teamwork. You and us, working together, discovering answers to the biggest questions your business faces. Then rapidly bringing them to life.</p>
      //       </Grid.Column>
      //       <Grid.Column>
      //         <h3 style={{
      //           color: '#000',
      //           fontSize: '20px',
      //           fontWeight: '700',
      //           marginBottom: 10
      //         }}>How we can help you</h3>
      //         <p style={{
      //           fontSize: '20px',
      //           marginBottom: 10
      //         }}>Develop a minimum viable product</p>
      //         <Divider/>
      //         <p style={{
      //           fontSize: '20px',
      //           marginBottom: 10
      //         }}>Improve and grow your existing product</p>
      //         <Divider/>
      //         <p style={{
      //           fontSize: '20px',
      //           marginBottom: 10
      //         }}>Integrate us as your on-demand team</p>
      //       </Grid.Column>
      //     </Grid.Row>
      //   </Grid>
      //
      //   <WorkWithUs />
      // </div>
    )
  }
}
