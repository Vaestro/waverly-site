import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import {Image, Button, Divider, Grid} from 'semantic-ui-react'
import '../css/master.css';

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
                            <div>
                                <div className="projectContent">
                                    <Image src="https://s3.amazonaws.com/pearlventures/hype_screenshot.png" id="iphone"/>

                                </div>
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                            <h3 style={{
                                color: '#00C7FF',
                                fontSize: '20px',
                                fontWeight: '700',
                                marginBottom: 10
                            }}>Hype</h3>
                            <p style={{
                                fontSize: '28px',
                                marginBottom: 10,
                                fontWeight: '400'
                            }}>Get exclusive access to the hottest clubs in NYC</p>
                            <p>We were disastisfied with the way nightlife has operated and were inspired to create a paltform to make planning a great night out easy</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className="grid-row">
                        <Grid.Column >
                            <div>
                                <div className="projectContent">
                                    <Image src="https://s3.amazonaws.com/pearlventures/durite_screenshot.png" id="iphone"/>
                                </div>
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                            <h3 style={{
                                color: '#00C7FF',
                                fontSize: '20px',
                                fontWeight: '700',
                                marginBottom: 10
                            }}>Durite</h3>
                            <p style={{
                                fontSize: '28px',
                                marginBottom: 10,
                                fontWeight: '400'
                            }}>Pioneering cutting edge manufacturing</p>
                            <p>We were tasked with creating the marketing site for a manufacturer in New York that specializes in creating custom natural-like materials</p>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row className="grid-row">
                        <Grid.Column >
                            <div>
                                <div className="projectContent">
                                    <Image src="https://s3.amazonaws.com/pearlventures/maxicom_screenshot.png" id="iphone"/>
                                </div>
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                            <h3 style={{
                                color: '#00C7FF',
                                fontSize: '20px',
                                fontWeight: '700',
                                marginBottom: 10
                            }}>Maxicom</h3>
                            <p style={{
                                fontSize: '28px',
                                marginBottom: 10,
                                fontWeight: '400'
                            }}>Get paid for your network</p>
                            <p>We were asked to bring life to a business model. Meet Maxicom, the platform that allows you make money from referrals.</p>
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
