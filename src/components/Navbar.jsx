import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuAnimation: '',
      menuItemsAnimation: ''
    }
  }

  openMenu() {
    this.setState({openDisplay: 'none', closeDisplay: 'block', menuAnimation: 'openMenu 0.5s forwards', menuItemsAnimation: 'show 0.5s 0.5s forwards'})
  }

  closeMenu() {
    this.setState({openDisplay: 'block', closeDisplay: 'none', menuAnimation: 'closeMenu 0.5s forwards', menuItemsAnimation: 'hidden 0.1s forwards'})
  }

  render() {
    return (
      <div className="navbar-container ">
        <nav className="navbar navbar-expand-lg justify-content-between navbar-dark bg-primary-3 border-bottom-0" data-sticky="top">
          <div className="container">
            <div className="col flex-fill px-0 d-flex justify-content-between">
              <Link className="navbar-brand mr-0 fade-page" to="/">

                <img src="https://s3.amazonaws.com/waverly-marketing-site/logo.png" alt="Waverly"/>

              </Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">


              </button>
            </div>
            <div className="collapse navbar-collapse col px-0 px-lg-2 flex-fill">
              <div className="py-2 py-lg-0">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <Link to="/work" className="nav-link">Work</Link>

                  </li>

                </ul>
              </div>
            </div>
            <div className="collapse navbar-collapse justify-content-end col flex-fill px-0"><a href="mailto:contact@waverly.co" className="btn btn-primary ml-lg-3">Contact Us</a>

            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;
