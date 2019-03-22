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
        <h1 className="display-3 mb-5">We form lasting partnerships.</h1>
        <p className="lead">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
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
            </div>
          </div>
          <div className="row" data-isotope-collection data-isotope-id="projects">
            <div className="col-sm-6 mb-4" data-isotope-item data-category="Branding">
              <a href="#">
                <img src="https://s3.amazonaws.com/waverly-marketing-site/socialspeedster-work.png" alt="Volkswagen Australia" className="rounded mb-3"/>
                <h4 className="mb-0">Volkswagen Australia</h4>
                <div className="text-small text-muted">Branding</div>
              </a>
            </div>
            <div className="col-sm-6 mb-4" data-isotope-item data-category="Art Direction">
              <a href="#">
              <img src="https://s3.amazonaws.com/waverly-marketing-site/dareyou-work.png" alt="Volkswagen Australia" className="rounded mb-3"/>
                <h4 className="mb-0">Go Commerce</h4>
                <div className="text-small text-muted">Art Direction</div>
              </a>
            </div>
            <div className="col-sm-6 mb-4" data-isotope-item data-category="Digital">
              <a href="#">
              <img src="https://s3.amazonaws.com/waverly-marketing-site/storyflow-layouts.png" alt="Volkswagen Australia" className="rounded mb-3"/>
                <h4 className="mb-0">Tribe</h4>
                <div className="text-small text-muted">Digital</div>
              </a>
            </div>
            <div className="col-sm-6 mb-4" data-isotope-item data-category="Art Direction">
              <a href="#">
                <img src="assets/img/portfolio-item-3.jpg" alt="Beker EV" className="rounded mb-3"/>
                <h4 className="mb-0">Beker EV</h4>
                <div className="text-small text-muted">Art Direction</div>
              </a>
            </div>
            <div className="col-sm-6 mb-4" data-isotope-item data-category="Branding">
              <a href="#">
                <img src="assets/img/portfolio-item-2.jpg" alt="Oculus Go" className="rounded mb-3"/>
                <h4 className="mb-0">Oculus Go</h4>
                <div className="text-small text-muted">Branding</div>
              </a>
            </div>
            <div className="col-sm-6 mb-4" data-isotope-item data-category="Digital">
              <a href="#">
                <img src="assets/img/portfolio-item-1.jpg" alt="Leap iOS" className="rounded mb-3"/>
                <h4 className="mb-0">Leap iOS</h4>
                <div className="text-small text-muted">Digital</div>
              </a>
            </div>
          </div>
        </div>
      </section>
  </Layout>
)

export default Work
