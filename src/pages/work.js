import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Customers from "../components/customers"
const Work = () => (
  <Layout>
    <SEO title="Page two" />
    <section className="hero">

      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-four-fifths">
              <p className="title has-text-centered has-text-dark is-italic is-size-1 is-size-3-mobile is-uppercase">
                Our work
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
      <section className="section">
        <div className="container">
          <Customers/>
        </div>
      </section>
      <section className="hero is-primary is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column">
                <div className="columns is-centered">
                  <div className="column is-10 is-narrow">
                    <h1 className="title has-text-weight-bold is-uppercase is-size-2 is-size-3-mobile">
                      Work with us
                    </h1>
                  </div>
                </div>

              </div>
              <div className="column has-text-centered">

                <a className="button is-large is-white has-text-weight-bold is-outlined" href="mailto:contact@waverly.co" style={{
                  padding: '30px 50px'
                }}>
                  <p>Contact</p>
                </a>

              </div>
            </div>
          </div>

        </div>
      </section>
  </Layout>
)

export default Work
