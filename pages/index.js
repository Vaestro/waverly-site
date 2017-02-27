import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import '../css/master.scss'
var FontAwesome = require('react-fontawesome');

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <h1 className="intro-title">
          We're a software design and development studio that is reimagining how businesses should work
        </h1>
        <ul style={{listStyleType:"none",marginLeft:'0'}}>
          <li>
            <a href="http://www.gethype.co/">Hype</a><FontAwesome name='arrow-circle-right'/>
          </li>
          <li>
            <a href="http://www.awareapp.co">Aware (Coming Soon)</a><FontAwesome name='arrow-circle-right'/>
          </li>
          <li>
            <a href="http://www.duriteusa.com">Durite USA</a><FontAwesome name='arrow-circle-right'/>
          </li>
        </ul>
        <div className="footer">
        <h3>Contact</h3>
        <p><a href="mailto:contact@waverly.co">contact@waverly.co</a><br/>
        917.268.7306<br/>63 W 73rd ST<br/> New York, NY 10023</p>
        </div>
      </div>
    )
  }
}
