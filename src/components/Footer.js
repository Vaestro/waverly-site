import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="footer" style={{
        paddingBottom: '50px',
        backgroundColor: '#21314B'
      }}>
        <div className="container">
          <div className="columns">
            <div className="column is-offset-1">
              <h2 className="subtitle is-size-3 has-text-white">
                WAVERLY
              </h2>
              <p className="subtitle is-size-5 has-text-light">
                Start your best work
              </p>
            </div>

            <div className="column">
              <h2 className="title has-text-light is-size-4-mobile">
                Quick Links
              </h2>
              <div className="columns">
                <div className="column">

                  <p >
                    <a className="has-text-grey-light" href="mailto:contact@waverly.co">
                      Contact
                    </a>
                  </p>

                  <p className="">
                    <Link className="has-text-grey-light" to="/terms">
                      Terms of Service
                    </Link>
                  </p>
                  <p className="">
                    <Link className="has-text-grey-light" to="/privacy">
                      Privacy Policy
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="column">

              <h2 className="title has-text-light is-size-4-mobile">
                Follow Us
              </h2>

              <p className="">
                <a target="_blank" className="link is-info has-text-grey-light" href="http://instagram.com/waverlycompany">
                  <i className="fa fa-instagram" aria-hidden="true"></i>&nbsp;Instagram
                </a>
              </p>
              <p className="">
                <a target="_blank" className="link is-info has-text-grey-light" href="http://facebook.com/waverlyandco">
                  <i className="fa fa-facebook" aria-hidden="true"></i>&nbsp;Facebook
                </a>
              </p>
              <p className="">

                <a target="_blank" className="link is-info has-text-grey-light" href="http://twitter.com/waverlyandco">
                  <i className="fa fa-twitter" aria-hidden="true"></i>&nbsp;Twitter
                </a>
              </p>

            </div>
          </div>
          <hr style={{
            width: '80%',
            margin: '50px auto',
            backgroundColor: 'rgba(255,255,255,0.1)'
          }}/>
          <div className="columns is-centered">
            <div className="column">
              <h2 className="subtitle is-size-5 has-text-centered has-text-grey-lighter">
                Waverly Copyright 2018
              </h2>
            </div>
          </div>
        </div>

      </footer>
    )
  }
}

export default Footer;
