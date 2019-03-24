import React from "react"
import Helmet from "react-helmet"

import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Service from '../components/Service';
import Footer from '../components/Footer';
import Influencer from '../components/Influencer';
import Testimonials from '../components/Testimonials';




const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />


    <div className="loader">
          <div className="loading-animation"></div>
        </div>



        <section className="bg-primary-3 text-light">
  <div className="container">
    <div className="row align-items-center justify-content-between o-hidden">
      <div className="col-md-4 order-sm-2 mb-5 mb-sm-0" data-aos="fade-left">
        <img src="https://s3.amazonaws.com/waverly-marketing-site/waverly-welcome-img.png" alt="Image"/>
      </div>
      <div className="col-md-8 pr-xl-5 order-sm-1">
        <h1 className="display-4">Bridging the gap between your business goals and tomorrow’s cutting-edge innovation</h1>
        <p className="lead">Waverly is a software design & growth marketing company. Whatever your opportunity, we can unlock it with technology.</p>

      </div>
    </div>
  </div>

</section>
        <section className="bg-primary-3 text-light">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="100">
                <a href="https://socialspeedster.com">
                  <img src="https://s3.amazonaws.com/waverly-marketing-site/socialspeedster-work.png" alt="Leap iOS" className="rounded mb-3"/>
                </a>
                <a href="https://socialspeedster.com">
                  <h4 className="mb-0">Social Speedster</h4>
                  <div className="text-small text-muted">Web Application</div>
                </a>
              </div>
              <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="200">
              <a href="https://dareyouapp.com">
                <img src="https://s3.amazonaws.com/waverly-marketing-site/dareyou-work.png" alt="Dare You" className="rounded mb-3"/>
                </a>
                <a href="https://dareyouapp.com">
                  <h4 className="mb-0">Dare You</h4>
                  <div className="text-small text-muted">Mobile Application</div>
                </a>
              </div>
              <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="300">
              <a href="https://getstoryflow.app">
                <img src="https://s3.amazonaws.com/waverly-marketing-site/storyflow-layouts.png" alt="Storyflow" className="rounded mb-3"/>
                </a>
                <a href="https://getstoryflow.app">
                  <h4 className="mb-0">Storyflow</h4>
                  <div className="text-small text-muted">Mobile Application</div>
                </a>
              </div>


            </div>
          </div>
        </section>

        <section>
            <div className="container">
              <div className="row justify-content-center text-center mb-5">
                <div className="col-xl-8 col-lg-9">
                  <h2 className="display-4 mx-xl-6">We'll help you deliver next gen experiences</h2>
                  <p className="lead">
                    Whether you are fortune 500 or a startup we can help you to unlock opportunity by creating human-centered products.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-3 d-flex" data-aos="fade-up" data-aos-delay="100">
                  <a href="#" className="card card-icon-2 card-body justify-content-between hover-shadow-3d">
                    <div className="icon-round mb-3 mb-md-4 icon bg-primary">
                      <i className="fas fa-marker"></i>
                    </div>
                    <div className="hover-hide">

                    <h5 className="mb-0">Product Strategy</h5>
                    </div>
                    <div className="hover-show">
                    Product Strategy
Design Exploration
Market Research
Product Definition
User Insights
                      </div>
                  </a>
                </div>
                <div className="col-md-6 col-lg-3 d-flex" data-aos="fade-up" data-aos-delay="200">
                  <a href="#" className="card card-icon-2 card-body justify-content-between hover-shadow-3d bg-primary text-light">
                    <div className="icon-round mb-3 mb-md-4 icon bg-white">
                    <i className="fas fa-pen-fancy"></i>

                    </div>
                    <div className="hover-hide">

                    <h5 className="mb-0">Design</h5>
                    </div>
                    <div className="hover-show">
                    User Experience Design<br/>
Interaction Design<br/>
Visual Design<br/>
Design QA<br/>
                      </div>
                  </a>
                </div>
                <div className="col-md-6 col-lg-3 d-flex" data-aos="fade-up" data-aos-delay="300">
                  <a href="#" className="card card-icon-2 card-body justify-content-between hover-shadow-3d bg-primary-2 text-light">
                    <div className="icon-round mb-3 mb-md-4 icon bg-white">
                    <i className="fas fa-file-code"></i>

                    </div>
                    <div className="hover-hide">

                    <h5 className="mb-0">Technology</h5>
                    </div>
                    <div className="hover-show">
                    iOS & Android<br/>
                    React Native<br/>
                    Frontend (React)<br/>
                    Backend (Node.js)<br/>
                    Machine Learning<br/>
                    AR/VR<br/>
                    QA Testing<br/>
                      </div>
                  </a>
                </div>
                <div className="col-md-6 col-lg-3 d-flex" data-aos="fade-up" data-aos-delay="400">
                  <a href="#" className="card card-icon-2 card-body justify-content-between hover-shadow-3d bg-primary-3 text-light">
                    <div className="icon-round mb-3 mb-md-4 icon bg-white">
                    <i className="fas fa-search-dollar"></i>

                    </div>
                    <div className="hover-hide">

                    <h5 className="mb-0">Insights</h5>
                    </div>
                    <div className="hover-show">
                    Target Customer Insights<br/>
            Analytics & Metrics tracking<br/>
            Reviews & Reports<br/>
            Further Recommendations<br/>
                      </div>                  </a>
                </div>
              </div>
            </div>
          </section>
        <footer className="pb-5 bg-primary-3 text-light">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="h1">Interested in collaborating?</div>
                <div className="my-5">
                  <a href="mailto:contact@waverly.co" className="btn btn-lg btn-primary">Get In Touch</a>
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <ul className="nav">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">

                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">

                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">


                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">

                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-auto">
                <small className="text-muted">©2014-2019 All Rights Reserved Waverly.</small>
              </div>
            </div>
          </div>
        </footer>
        <Helmet>
        <script>{`
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:1089815,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}</script>



            <script type="text/javascript">{`
              window.addEventListener("load", function () {
                document.querySelector('body').classList.add('loaded');
              });
            `}</script>
        </Helmet>
  </Layout>
)

export default IndexPage
