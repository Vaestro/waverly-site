import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import '../css/master.css';

export default class Template extends React.Component {
    state = {
        activeItem: 'home'
    }

    handleItemClick = (e, {name}) => this.setState({activeItem: name})
    static propTypes = {
        children: PropTypes.func
    }

    openMenu() {
      this.setState({animation:'openMenu 0.5s forwards', menuAnimation:'menuEntry 1s 0.5s forwards'})
    }

    closeMenu() {
      this.setState({animation:'closeMenu 1s forwards', menuAnimation:'menuLeave 0.5s forwards'})
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

                <div id='menu' style={{animation:`${this.state.animation}`}}>
                  <div id='menuBtn'><i className='fa fa-close' aria-hidden='true' onClick={this.closeMenu.bind(this)}></i></div>
                  <div className='menuContent' style={{animation:`${this.state.menuAnimation}`}}>
                    <div className='logo'>
                      <Link to='/' onClick={this.closeMenu.bind(this)}><strong>WAVERLY</strong> &CO</Link>
                    </div>
                    <h1><Link to='/#home' onClick={this.closeMenu.bind(this)}>HOME</Link></h1>
                    <h1><Link to='/#work' onClick={this.closeMenu.bind(this)}>WORK</Link></h1>
                    <h1><Link to='/#contact' onClick={this.closeMenu.bind(this)}>CONTACT</Link></h1>
                    <div className='socialMedia'>
                      <a href='https://www.facebook.com/waverlyandco/'><i className='fa fa-facebook'></i></a>
                      <a href='https://www.instagram.com/waverlycompany/'><i className='fa fa-instagram'></i></a>
                      <a href='https://twitter.com/waverlyandco'><i className='fa fa-twitter'></i></a>
                    </div>
                  </div>
                </div>

                <div className='content header'>
                  <div className='menu'><i className='fa fa-bars' aria-hidden='true' onClick={this.openMenu.bind(this)}></i></div>
                  <div className='logo'>
                    <Link to='/'><h1>WAVERLY</h1> &CO</Link>
                  </div>
                  <div className='entry2 getInTouch'>
                    <a href='https://dopeatlas.typeform.com/to/lyD8J5' target='_blank'>
                      Get in touch
                    </a>
                    <script dangerouslySetInnerHTML={{
                      __html: ` (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })()`
                    }}/>
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
