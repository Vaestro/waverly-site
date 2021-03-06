import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Navbar from '../components/Navbar';
import '@fortawesome/fontawesome-free/css/all.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/theme.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

class Layout extends React.Component {
  componentDidMount() {
    AOS.init()
  }
  render() {
    return (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Navbar />
        <div>
          <main>{this.props.children}</main>
        </div>
      </>
    )}
  />
)
}
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
