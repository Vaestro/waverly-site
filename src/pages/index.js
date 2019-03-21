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


        <section id="first-section" className="hero is-medium">


          <div className="hero-body">
            <div className="container">
              <div className="columns">
              <div className="column is-three-fifths">

                  <p className="header-title has-text-left has-text-dark is-size-1 is-size-3-mobile">
                    Bridging the gap between your business goals and tomorrow’s cutting-edge innovation
                  </p>
                  <br/>
                  <p className="is-size-5 ">
                  Waverly is a software design & growth marketing company.
                  Whatever your opportunity, we can unlock it with technology.
                  </p>
                  <br/>

                  <a className="button is-medium is-dark" href="#services" style={{
                    padding: '30px 50px',
                    marginTop: '10px'
                  }}>
                    <p>What we do</p>
                  </a>

                  </div>
                  <div className="column">
                  <img src="https://s3.amazonaws.com/waverly-marketing-site/waverly-welcome-img.png"/>

                  </div>

              </div>
              <div className="column is-two-fifths">
              </div>

              </div>
            </div>

        </section>
        <section className="section">
          <div className="container">
          <div className='columns'>
          <div className="column is-one-third">
          <Influencer url='https://bit.ly/2HSTYk2' imgUrl='url("https://s3.amazonaws.com/waverly-marketing-site/socialspeedster-work.png")' title='Social Speedster' subtitle='Social Speedster is the first platform that helps increase your organic Instagram engagement.' hexColor="#f3a4b5"/>
          </div>
            <div className="customer column is-one-third">
            <Influencer url="https://dareyouapp.com" imgUrl='url("https://s3.amazonaws.com/waverly-marketing-site/dareyou-work.png")' title='Dare You' subtitle='The short form video challenge platform where anyone can create viral campaigns' hexColor="#f3a4b5"/>
            </div>
            <div className="customer column is-one-third">
            <Influencer url='https://getstoryflow.app' imgUrl='url("https://s3.amazonaws.com/waverly-marketing-site/storyflow-layouts.png")' title='Storyflow' subtitle='Create amazing videos for Instagram, IGTV, and Snapchat' hexColor="#f3a4b5"/>
            </div>
            </div>

            <Link to="/work" className='has-text-centered'>
            <p className="button is-dark is-size-5 has-text-right has-text-weight-bold">View more of our work</p>
            </Link>
          </div>

        </section>
        <section id="services">
          <h1 className="title has-text-centered is-size-1 is-size-3-mobile">What We Offer</h1>
          <p className="subtitle has-text-centered is-size-5-mobile">We offer a variety of services that help you grow your brand and audience online</p>

          <Service title="Website creation and optimization" subtitle="Let our creators help you design and develop marketing pages for your website that are hyper-focused on optimizing conversions for your target audience" imgUrl="https://s3.amazonaws.com/joinswaybucket/waverly_following_services.png" type={1} moreLink="website-optimization" outsideLink={false}/>

          <Service title="User acquisition" subtitle="Via AdWords, Instagram, Facebook, and cold email. Majority of our clients get 100-300+ organic traffic daily! By means of filtering and interacting with your target audience, we help expose your brand to the people that matter and relate to your brand." imgUrl="https://s3.amazonaws.com/joinswaybucket/waverly_power_like_service.png" type={2} moreLink="user-acquisition" outsideLink={false}/>

          <Service title="Web/mobile app creation" subtitle="We help you create and launch an app that will streamline your offerings to your customers and improve your brand" imgUrl="https://s3.amazonaws.com/joinswaybucket/waverly_influencers_services.png" type={1} moreLink="content-creation" outsideLink={false}/>

        </section>


        <section className="hero is-primary is-medium">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column">
                  <div className="columns is-centered">
                    <div className="column is-10 is-narrow">
                      <h1 className="has-text-centered title has-text-weight-bold is-uppercase is-size-2 is-size-3-mobile  has-text-dark">
                        Get started today
                      </h1>
                    </div>
                  </div>

                </div>
                <div className="column has-text-centered">

                  <a className="button is-large is-dark has-text-weight-bold is-outlined" href="mailto:contact@waverly.co" style={{
                    padding: '30px 50px'
                  }}>
                    <p>Start now</p>
                  </a>

                </div>
              </div>
            </div>

          </div>
        </section>



        <Footer/>
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
        <script type="text/javascript" helmetKey="pixel">{`
"use strict";

!function() {
  var t = window.driftt = window.drift = window.driftt || [];
  if (!t.init) {
    if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
    t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ],
    t.factory = function(e) {
      return function() {
        var n = Array.prototype.slice.call(arguments);
        return n.unshift(e), t.push(n), t;
      };
    }, t.methods.forEach(function(e) {
      t[e] = t.factory(e);
    }), t.load = function(t) {
      var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
      o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
      var i = document.getElementsByTagName("script")[0];
      i.parentNode.insertBefore(o, i);
    };
  }
}();
drift.SNIPPET_VERSION = '0.3.1';
drift.load('be7rd7hvvp4e');
                `}</script>
        </Helmet>
  </Layout>
)

export default IndexPage
