import React from 'react';
import Helmet from 'react-helmet';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export default class Slides extends React.Component {
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
          <div id="slideshow"  style={{marginTop:'75px'}}>
            <Slider {...settings}>
                <div className='slideItem'>
                  1
                </div>
                <div className='slideItem'>
                  2
                </div>
                <div className='slideItem'>
                  3
                </div>
                <div className='slideItem'>
                  4
                </div>
            </Slider>
          </div>
        )
    }
}
