import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

class Service extends React.Component {
  constructor(props) {
    super(props);
  }

  renderColumns() {
    if (this.props.type === 1) {
      return (
        <div className="columns is-vcentered services-row">
          <div className="column">
            <div className="columns is-centered">
              <div className="column is-10 is-narrow">
                <div className="content">
                  <h1 className="title is-size-3 is-size-4-mobile is-italic has-text-weight-bold" style={{
                    paddingBottom: '15px'
                  }}>
                    <b>
                      <i>{this.props.title}</i>
                    </b>
                  </h1>
                  <h2 className="subtitle is-size-5 is-size-5-mobile">
                    {this.props.subtitle}
                  </h2>
                  <p className="subtitle">

                    <span style={{
                      borderBottom: '2.5px solid #3A61FF'
                    }}>

                    {/*
                      this.props.outsideLink ? (
                      <a href={`${this.props.moreLink}`}>Learn More</a>
                    ) : (
                      <Link to={`/${this.props.moreLink}`} style={{
                        color: 'black'
                      }}>
                        Learn More
                      </Link>
                    )
                  */}

                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="columns is-centered">
              <div className="column is-9 is-narrow">
                <figure className="image">
                  <img className="" src={this.props.imgUrl}/>
                </figure>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="columns is-vcentered">
          <div className="column">
            <div className="columns is-centered ">
              <div className="column is-9 is-narrow">
                <figure className="image">
                  <img className="" src={this.props.imgUrl}/>
                </figure>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="columns is-centered">
              <div className="column is-10 is-narrow">
                <div className="content">
                  <h1 className="title is-size-3 is-size-4-mobile is-italic has-text-weight-bold" style={{
                    paddingBottom: '15px'
                  }}>
                    <b>
                      <i>{this.props.title}</i>
                    </b>
                  </h1>
                  <h2 className="subtitle is-size-5 is-size-5-mobile">
                    {this.props.subtitle}
                  </h2>
                  <p className="subtitle">

                    <span style={{
                      borderBottom: '2.5px solid #3A61FF'
                    }}>
                    {/*
                      this.props.outsideLink ? (
                      <a href={`/${this.props.moreLink}`}>Learn More</a>
                    ) : (
                      <Link to={`/${this.props.moreLink}`} style={{
                        color: 'black'
                      }}>
                        Learn More
                      </Link>
                    )
                  */}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      );
    }
  }

  render() {
    return (
      <section className="hero is-small is-white">
        <div className="hero-body">
          <div className="container">
            {this.renderColumns()}
          </div>
        </div>
      </section>
    )
  }
}

export default Service;
