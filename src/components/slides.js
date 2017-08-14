import React from 'react';
import Helmet from 'react-helmet';
import {Image, Button, Divider, Grid} from 'semantic-ui-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export default class Slides extends React.Component {
    renderSlides() {
      return(
        this.props.urls.map(url =>
          <div className='slideItem' key={url}>
            <img src={url}/>
          </div>)
      )
    }

    render() {
      var settings = {
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive:[
            { breakpoint: 768, settings: { dots: true, slidesToShow: 1 } },
            { breakpoint: 1024, settings: { slidesToShow: 4 } }
          ]
      };
        return (
          <Grid.Row className="grid-row">
            <div style={{width:'80%', margin:'auto', borderTop:'2px solid #000'}}></div>
            <div id="slideshow"  style={{marginTop:'75px'}}>
              <Slider {...settings}>
                  {this.renderSlides.bind(this)()}
              </Slider>
            </div>
          </Grid.Row>
        )
    }
}
