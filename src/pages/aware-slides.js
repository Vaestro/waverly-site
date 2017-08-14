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
                  <img src='https://s3.amazonaws.com/aware-contentdelivery-mobilehub-479298082/Charity+Picker.png'/>
                </div>
                <div className='slideItem'>
                  <img src='https://s3.amazonaws.com/aware-contentdelivery-mobilehub-479298082/Discovery+Feed+Copy.png'/>
                </div>
                <div className='slideItem'>
                  <img src='https://s3.amazonaws.com/aware-contentdelivery-mobilehub-479298082/Notifications.png'/>
                </div>
                <div className='slideItem'>
                  <img src='https://s3.amazonaws.com/aware-contentdelivery-mobilehub-479298082/Post.png'/>
                </div>
            </Slider>
          </div>
        )
    }
}
