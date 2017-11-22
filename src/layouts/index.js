import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import '../css/master.css';

export default class Template extends React.Component {
    state = {
      loading: '',
      menuOpen: false,
      activeItem: 'home',
      shadow: '0 1px 8px 0 rgba(102, 111, 238, 0.3), 0 1px 20px 0 rgba(102, 111, 238, 0.3)'
    }

    handleItemClick = (e, {name}) => this.setState({activeItem: name})
    static propTypes = {
        children: PropTypes.func
    }

    componentWillReceiveProps(window) {
      this.setState({ loading: 'loading 1s'});
      setTimeout(() => {
        this.setState({ loading: ''});
      }, 1000);
    }

    handleMenu() {
      if (!this.state.menuOpen) {
        this.setState({
          menuOpen: true,
          animation: 'openMenu 0.5s forwards',
          menuAnimation: 'menuEntry 1s 0.5s forwards',
          shadow: '0 1px 8px 0 rgba(32, 34, 65, 0.5), 0 1px 20px 0 rgba(32, 34, 65, 0.5)',
          span1: {transform: 'translateY(0.65em) translateX(0) rotate(-45deg)'},
          span2: {opacity: 0},
          span3: {transform: 'translateY(-0.65em) translateX(0) rotate(45deg)'}
        })
      } else {
        this.setState({
          menuOpen: false,
          animation: 'closeMenu 1s forwards',
          menuAnimation: 'menuLeave 0.5s forwards',
          shadow: '0 1px 8px 0 rgba(102, 111, 238, 0.3), 0 1px 20px 0 rgba(102, 111, 238, 0.3)',
          span1: {},
          span2: {opacity: 1},
          span3: {}
        })
      }
    }

    render() {
        const {activeItem} = this.state

        return (
            <div>
                <Helmet title='Waverly & Co' meta={[
                    {
                        name: 'description',
                        content: 'Strategy, custom web application design and native iOS and branded digital experiences. We build digital products that help companies build amazing brands.'
                    }, {
                        name: 'keywords',
                        content: 'digital, product, consultant, studio, design, code, programming, apps, mobile, web, software, brands'
                    }
                ]}/>

                <div className='loadingBar' style={{animation:`${this.state.loading}`}}></div>
                <div id='menu' style={{animation:`${this.state.animation}`}}>
                  <div className='menuContent' style={{animation:`${this.state.menuAnimation}`}}>
                    <div className='logo'>
                      <Link to='/' onClick={this.handleMenu.bind(this)}><strong>WAVERLY</strong> &CO</Link>
                    </div>
                    <h1><Link to='/#home' onClick={this.handleMenu.bind(this)}>HOME</Link></h1>
                    <h1><Link to='/#work' onClick={this.handleMenu.bind(this)}>WORK</Link></h1>
                    <h1><Link to='/#contact' onClick={this.handleMenu.bind(this)}>CONTACT</Link></h1>
                    <div className='socialMedia'>
                      <a href='https://www.facebook.com/waverlyandco/'><i className='fa fa-facebook'></i></a>
                      <a href='https://www.instagram.com/waverlycompany/'><i className='fa fa-instagram'></i></a>
                      <a href='https://twitter.com/waverlyandco'><i className='fa fa-twitter'></i></a>
                    </div>
                  </div>
                </div>

                <div className='content header'>
                  <div className='menu'
                    style={{boxShadow:`${this.state.shadow}`}}>
                    <div className='navicon' onClick={this.handleMenu.bind(this)}>
                      <span style={this.state.span1}></span>
                      <span style={this.state.span2}></span>
                      <span style={this.state.span3}></span>
                    </div>
                  </div>
                  <div className='logo'>
                    <Link to='/'><h1>WAVERLY</h1> &CO</Link>
                  </div>

                  {/* <div className='entry2 getInTouch'>
                    <a href='https://dopeatlas.typeform.com/to/lyD8J5' target='_blank'>
                      Get in touch
                    </a>
                    <script dangerouslySetInnerHTML={{
                      __html: ` (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })()`
                    }}/>
                  </div> */}

                  <div className='entry2 startProject'>
                    <Link to='/start-a-project/'>
                      Start a project
                    </Link>
                  </div>
                  
                  <div className='clear'></div>
                </div>

                <div>
                    {this.props.children()}
                </div>
            </div>
        )
    }
}
