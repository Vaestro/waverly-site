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
                <img src="assets/img/logo-white.svg" alt="Waverly"/>
              </Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">


              </button>
            </div>
            <div className="collapse navbar-collapse col px-0 px-lg-2 flex-fill">
              <div className="py-2 py-lg-0">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown-grid" aria-expanded="false" aria-haspopup="true">About</a>
                    <div className="dropdown-menu row">
                      <div className="col-auto" data-dropdown-content>
                        <div className="card card-sm card-body shadow-sm"><a href="home-course.html" className="dropdown-item fade-page">Course</a><a href="home-cryptocurrency.html" className="dropdown-item fade-page">Cryptocurrency</a><a href="home-desktop-app.html" className="dropdown-item fade-page">Desktop App</a>
                          <a
                          href="home-event.html" className="dropdown-item fade-page">Event</a><a href="home-mobile-app.html" className="dropdown-item fade-page">Mobile App</a><Link to="/work" className="dropdown-item fade-page">Work</Link><a href="home-saas.html" className="dropdown-item fade-page">SaaS</a>
                            <a
                            href="home-saas-trend.html" className="dropdown-item fade-page">SaaS - Trend</a><a href="home-software-library.html" className="dropdown-item fade-page">Software Library</a>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown-grid" aria-expanded="false" aria-haspopup="true">Blog</a>
                    <div className="dropdown-menu row">
                      <div className="col-auto" data-dropdown-content>
                        <div className="card card-sm card-body shadow-sm">
                          <div className="dropdown">
                            <a href="#" className="dropdown-item dropdown-toggle" data-toggle="dropdown-grid" aria-expanded="false" aria-haspopup="true">
                              <span>Blog Layouts</span>

                            </a>
                            <div className="dropdown-menu row">
                              <div className="col-auto" data-dropdown-content>
                                <div className="card card-sm card-body shadow"><a href="blog-cards.html" className="dropdown-item fade-page">Blog Cards</a><a href="blog-masonry.html" className="dropdown-item fade-page">Blog Masonry</a><a href="blog-sidebar.html" className="dropdown-item fade-page">Blog Sidebar</a>
                                  <a
                                  href="blog-magazine.html" className="dropdown-item fade-page">Blog Magazine</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="dropdown">
                            <a href="#" className="dropdown-item dropdown-toggle" data-toggle="dropdown-grid" aria-expanded="false" aria-haspopup="true">
                              <span>Article Layouts</span>


                            </a>
                            <div className="dropdown-menu row">
                              <div className="col-auto" data-dropdown-content>
                                <div className="card card-sm card-body shadow"><a href="blog-article.html" className="dropdown-item fade-page">Article Basic</a><a href="blog-article-video.html" className="dropdown-item fade-page">Article Video</a><a href="blog-article-image-header.html" className="dropdown-item fade-page">Article Image Header</a>
                                  <a
                                  href="blog-article-image-header-parallax.html" className="dropdown-item fade-page">Article Image Parallax</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
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
