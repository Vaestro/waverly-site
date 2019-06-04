import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Customers from "../components/Customers"
const Work = () => (
  <Layout>
    <SEO title="Page two" />
    <section className="bg-primary-3 has-divider text-light">
  <div className="container pb-6">
    <div className="row justify-content-center text-center">
      <div className="col-xl-8 col-lg-9 col-md-10">
        <h1 className="display-3 mb-5">Make something you love.</h1>

      </div>
    </div>
  </div>
  <div className="divider">

  </div>
</section>
    <section className="pt-5">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col col-md-auto">
            {/*
              <ul data-isotope-filters data-isotope-id="projects" className="nav mb-3">
                <li className="nav-item">
                  <a href="#" className="nav-link active" data-filter="*">All</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link" data-filter="Branding">Branding</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link" data-filter="Digital">Digital</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link" data-filter="Art Direction">Art Direction</a>
                </li>
              </ul>
              */}
            </div>
          </div>
          <div className="row" data-isotope-collection data-isotope-id="projects">
            <div className="col-sm-4 mb-4" data-isotope-item data-category="Branding">
              <a href="https://socialspeedster.com">
                <img src="https://s3.amazonaws.com/waverly-marketing-site/socialspeedster-work.png" alt="Social Speedster" className="rounded mb-3"/>
                <h4 className="mb-0">Social Speedster</h4>
                <div className="text-small text-muted">Web + Backend Development</div>
              </a>
            </div>
            <div className="col-sm-4 mb-4" data-isotope-item data-category="Art Direction">
            <a href="https://dareyouapp.com">
              <img src="https://s3.amazonaws.com/waverly-marketing-site/dareyou-work.png" alt="Dare You" className="rounded mb-3"/>
                <h4 className="mb-0">Dare You</h4>
                <div className="text-small text-muted">Mobile Design + Development</div>
              </a>
            </div>
            <div className="col-sm-4 mb-4" data-isotope-item data-category="Digital">
            <a href="https://getstoryflow.app">
              <img src="https://s3.amazonaws.com/waverly-marketing-site/storyflow-layouts.png" alt="Volkswagen Australia" className="rounded mb-3"/>
                <h4 className="mb-0">Storyflow</h4>
                <div className="text-small text-muted">Mobile Design + Development</div>
              </a>
            </div>
            <div className="col-sm-4 mb-4" data-isotope-item data-category="Branding">
            <a href="https://moved.com">
              <img src="https://s3.amazonaws.com/waverly-marketing-site/moved-work.png" alt="Volkswagen Australia" className="rounded mb-3"/>
                <h4 className="mb-0">Moved</h4>
                <div className="text-small text-muted">iOS Development</div>
              </a>
            </div>
            <div className="col-sm-4 mb-4" data-isotope-item data-category="Art Direction">
            <a href="https://waverlysocial.com">
              <img src="https://s3.amazonaws.com/waverly-marketing-site/waverlysocial-work.png" alt="Volkswagen Australia" className="rounded mb-3"/>
                <h4 className="mb-0">Waverly Social</h4>
                <div className="text-small text-muted">Web + Backend Development</div>
              </a>
            </div>
            <div className="col-sm-4 mb-4" data-isotope-item data-category="Branding">
            <a href="https://useflaunt.com">
              <img src="https://s3.amazonaws.com/waverly-marketing-site/flaunt-work.png" alt="Volkswagen Australia" className="rounded mb-3"/>
                <h4 className="mb-0">Flaunt</h4>
                <div className="text-small text-muted">Mobile Design + Development</div>
              </a>
            </div>
            <div className="col-sm-4 mb-4" data-isotope-item data-category="Digital">
            <a href="https://mogeteeusa.com">
              <img src="https://s3.amazonaws.com/waverly-marketing-site/mogetee-work.png" alt="Volkswagen Australia" className="rounded mb-3"/>
                <h4 className="mb-0">Moge Tee</h4>
                <div className="text-small text-muted">Web Design + Social Media Marketing</div>
              </a>
            </div>
            <div className="col-sm-4 mb-4" data-isotope-item data-category="Art Direction">
            <a href="https://2020social.com">
              <img src="https://s3.amazonaws.com/waverly-marketing-site/2020social-work.png" alt="Volkswagen Australia" className="rounded mb-3"/>
                <h4 className="mb-0">2020 Social</h4>
                <div className="text-small text-muted">Web + Backend Development</div>
              </a>
            </div>

            <div className="col-sm-4 mb-4" data-isotope-item data-category="Digital">
            <a href="https://cointelligent.io">
              <img src="https://s3.amazonaws.com/waverly-marketing-site/cointelligent-work.png" alt="Volkswagen Australia" className="rounded mb-3"/>
                <h4 className="mb-0">Cointelligent</h4>
                <div className="text-small text-muted">Mobile Design + Development</div>
              </a>
            </div>
            <div className="col-sm-4 mb-4" data-isotope-item data-category="Art Direction">
            <a href="https://maxicom.io">
              <img src="https://s3.amazonaws.com/waverly-marketing-site/maxicom-work.png" alt="Volkswagen Australia" className="rounded mb-3"/>
                <h4 className="mb-0">Maxicom</h4>
                <div className="text-small text-muted">Web + Backend Development</div>
              </a>
            </div>
            <div className="col-sm-4 mb-4" data-isotope-item data-category="Branding">
            <a href="https://memesagainstfriends.com">
              <img src="https://s3.amazonaws.com/waverly-marketing-site/maf-work.png" alt="Memes Against Friends" className="rounded mb-3"/>
                <h4 className="mb-0">Memes Against Friends</h4>
                <div className="text-small text-muted">Mobile Design + Development</div>
              </a>
            </div>
            <div className="col-sm-4 mb-4" data-isotope-item data-category="Digital">
            <a href="http://duriteusa.com">
              <img src="https://s3.amazonaws.com/waverly-marketing-site/durite-work.png" alt="Durite" className="rounded mb-3"/>
                <h4 className="mb-0">Durite</h4>
                <div className="text-small text-muted">Web Design + Development</div>
              </a>
            </div>
            <div className="col-sm-4 mb-4" data-isotope-item data-category="Digital">
              <a href="#">
              <img src="https://s3.amazonaws.com/waverly-marketing-site/hype-work.png" alt="Hype" className="rounded mb-3"/>
                <h4 className="mb-0">Hype</h4>
                <div className="text-small text-muted">Mobile Design + Development</div>
              </a>
            </div>
            <div className="col-sm-4 mb-4" data-isotope-item data-category="Digital">
              <a href="#">
              <img src="https://s3.amazonaws.com/waverly-marketing-site/allstate-work.png" alt="Allstate" className="rounded mb-3"/>
                <h4 className="mb-0">Allstate</h4>
                <div className="text-small text-muted">Web + Backend Development</div>
              </a>
            </div>
          </div>
        </div>
      </section>
  </Layout>
)

export default Work
