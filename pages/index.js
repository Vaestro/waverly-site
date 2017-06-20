import React from 'react'
import {Link} from 'react-router'
import {prefixLink} from 'gatsby-helpers'
import Helmet from 'react-helmet'
import {config} from 'config'
import {Image, Button, Divider, Grid} from 'semantic-ui-react'

export default class Index extends React.Component {
    render() {
        return (
            <div>
                <Grid verticalAlign='middle' centered className="banner">
                    <Image src="https://s3.amazonaws.com/pearlventures/word_logo.png" id="logo"/>
                    <Grid.Row >
                        <Grid.Column mobile={15} tablet={8} computer={5}>
                            <h1 className="headerTitle">Building infrastructure for the world's dreamers</h1>
                            <p className="subtitle">We are a NYC venture development firm, creating startups with the world's finest businesses and entrepreneurs.</p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid centered>
                    <Grid.Row centered columns={3}>
                        <Grid.Column mobile={14} tablet={8} computer={6}>
                            <h2 style={{
                                'text-align': 'left'
                            }}>
                                <u>Imagine having an idea in the morning and seeing it come to life before the day's over.</u>
                            </h2>
                        </Grid.Column>
                        <Grid.Column only='computer'></Grid.Column>
                    </Grid.Row>

                    <Grid.Row centered columns={3}>
                        <Grid.Column only='computer'></Grid.Column>
                        <Grid.Column mobile={14} tablet={8} computer={6}>
                            <p style={{
                                'text-align': 'left'
                            }}>It just takes a new mindset when it comes to software. The results? Enabling you to deliver game-changing products faster than ever and iterating with real customer feedback. At Waverly Studios, our passionate adherence to the silicon valley ethos of “Move fast and Break things” will allow us to change how the world builds software.</p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid container columns={2} centered stackable>
                    <Grid.Row>
                        <Grid.Column >
                            <div className="projectContainer" style={{
                                'background-color': '#D6F0F6',
                                'height': '800px'
                            }}>
                                <div className="projectContent">
                                    <Image style={{
                                        'height': '495px',
                                        'display': 'inline-block'
                                    }} src="https://s3.amazonaws.com/pearlventures/aware_screenshot.png" id="iphone"/>
                                    <p className="projectText">
                                        <b>Aware</b><br/>
                                        Challenge your friends for charity</p>
                                </div>
                            </div>
                            <div className="projectContainer" style={{
                                'background-color': '#F8F8F8',
                                'height': '800px'
                            }}>
                                <div className="projectContent">

                                    <Image style={{
                                        'display': 'inline-block'
                                    }} src="https://s3.amazonaws.com/pearlventures/maxicom_screenshot.png" id="iphone"/>
                                    <p className="projectText">
                                        <b>Maxicom</b><br/>
                                        Get paid for your network</p>
                                </div>
                            </div>
                            <div className="projectContainer" style={{
                                'background-color': '#EBF9F5',
                                'height': '800px'
                            }}>
                                <div className="projectContent">

                                    <Image style={{
                                        'display': 'inline-block'
                                    }} src="https://s3.amazonaws.com/pearlventures/healthmate_screenshot.png" id="iphone"/>
                                    <p className="projectText">
                                        <b>Healthmate</b><br/>
                                        Personalized nutrition plans on the web</p>
                                </div>
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                            <div className="projectContainer" style={{
                                'background-color': '#EDFAFF',
                                'height': '400px'
                            }}>
                                <div className="projectContent">

                                    <Image style={{
                                        'height': '250px',
                                        'display': 'inline-block'
                                    }} src='https://s3.amazonaws.com/pearlventures/memegod_screenshot.png'/>
                                    <p className="projectText">
                                        <b>Meme God</b><br/>
                                        An iMessage App to challenge your friends to create the best memes</p>
                                </div>
                            </div>
                            <div className="projectContainer" style={{
                                'background-color': '#F3F9FC',
                                'height': '800px'
                            }}>
                                <div className="projectContent">

                                    <Image style={{
                                        'height': '495px',
                                        'display': 'inline-block'
                                    }} src="https://s3.amazonaws.com/pearlventures/hype_screenshot.png" id="iphone"/>
                                    <p className="projectText">
                                        <b>Hype</b><br/>
                                        Get exclusive access to the hottest clubs in NYC</p>
                                </div>
                            </div>
                            <div className="projectContainer" style={{
                                'background-color': '#FDF2E6',
                                'height': '800px'
                            }}>
                                <div className="projectContent">

                                    <Image style={{
                                        'display': 'inline-block'
                                    }} src="https://s3.amazonaws.com/pearlventures/durite_screenshot.png" id="iphone"/>
                                    <p className="projectText">
                                        <b>Durite</b><br/>
                                        Marketing site for Durite Manufacturing</p>
                                </div>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Divider/>
                    <Grid.Row verticalAlign='top'>
                        <Grid.Column>
                        <div style={{'height':'400px'}}>
                            <h1>Interested in working with us?</h1>
                            <a id="typeform-button" class="typeform-share button" href="https://dopeatlas.typeform.com/to/lyD8J5" data-mode="drawer_left" target="_blank">Get in touch today
                            </a>
                            </div>

                            <script dangerouslySetInnerHTML={{
                                __html: ` (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })()`
                            }}/>

                        </Grid.Column>

                    </Grid.Row>

                </Grid>
            </div>
        )
    }
}
