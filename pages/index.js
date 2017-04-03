import React from 'react'
import {Link} from 'react-router'
import {prefixLink} from 'gatsby-helpers'
import Helmet from 'react-helmet'
import {config} from 'config'
import '../css/master.scss'
var FontAwesome = require('react-fontawesome');

export default class Index extends React.Component {
    render() {
        return (
            <div>
                <Helmet title={config.siteTitle} meta={[
                    {
                        "name": "description",
                        "content": "Sample"
                    }, {
                        "name": "keywords",
                        "content": "sample, something"
                    }
                ]}/>
                <p className="intro-title">
                    We're a software design and development studio that is reimagining how businesses should work
                </p>

                <ul style={{
                    listStyleType: "none",
                    marginLeft: '0'
                }}>
                    <li>
                        <a href="http://www.gethype.co/">
                            <img className="workImage" src={require('images/hype.png')}/>
                        </a>
                    </li>
                    <li>
                        <a href="http://www.awareapp.co/">
                            <img className="workImage" src={require('images/aware.png')}/>
                        </a>
                    </li>
                    <li>
                        <img className="workImage" src={require('images/memester.png')}/>
                    </li>
                    <li>
                        <a href="http://www.durite.us/">
                            <img className="workImage" src={require('images/durite.png')}/>
                        </a>
                    </li>
                    <li>
                        <a href="http://www.maxwork.co/">
                            <img className="workImage" src={require('images/maxicom.png')}/>
                        </a>
                    </li>
                </ul>
                <div className="footer">
                    <h3>Contact</h3>
                    <p>
                        <a href="mailto:contact@waverly.co">contact@waverly.co</a><br/>
                        917.268.7306<br/>63 W 73rd ST<br/>
                        New York, NY 10023</p>
                </div>
            </div>
        )
    }
}
