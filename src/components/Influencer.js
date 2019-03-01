import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

class Influencer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a href={this.props.url}>
      <div className="Section-quote Section-quote--vertical" style={{
        margin: '10px'
      }}>
        <div className="Section-quotePhoto Section-quotePhoto--glossier Section-quotePhoto--video" style={{
          backgroundImage: `${this.props.imgUrl}`
        }}></div>


      </div>

      <blockquote className="Quote">
        <h2 className="title">
          {this.props.title}
        </h2>
        <p className="subtitle">{this.props.subtitle}</p>
      </blockquote>
      </a>
    )
  }
}

export default Influencer;
