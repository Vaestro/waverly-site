import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

class Testimonial extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="testimonial">
        <div className="box testimonial-container " style={{
          margin: '10px'
        }}>
        <div className="columns is-mobile">
        <div className="column is-4">

          <a href={this.props.to} style={{
            textDecoration: 'none'
          }}>
            <figure className="image is-1by1">
              <img src={`${this.props.imgUrl}`} alt="testimonial" className=""/>
            </figure>
          </a>
          </div>

          <div className="column">

          <p className="testimonial-followers is-size-6">{this.props.quote}</p>
          <br/>
          <p className="testimonial-name is-size-6 has-text-weight-bold">- {this.props.name}</p>
          </div>

</div>
        </div>

      </div>
    )
  }
}

export default Testimonial;
