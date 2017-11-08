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
      this.setState({animation:'openMenu 0.5s forwards'})
    }

    closeMenu() {
      this.setState({animation:'closeMenu 0.5s forwards'})
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
                  <h1 onClick={this.closeMenu.bind(this)}><Link to='/#home'>HOME</Link></h1>
                  <h1 onClick={this.closeMenu.bind(this)}><Link to='/#work'>WORK</Link></h1>
                  <h1 onClick={this.closeMenu.bind(this)}><Link to='/#contact'>CONTACT</Link></h1>
                </div>

                <div className='content header'>
                  <div className='menu'><i className='fa fa-bars' aria-hidden='true' onClick={this.openMenu.bind(this)}></i></div>
                  <div className='logo'>
                    <Link to='/'><h1>WAVERLY</h1> &CO</Link>
                  </div>
                  <div className='getInTouch'>
                    <a target="_blank">
                      Get in touch
                    </a>
                    <script dangerouslySetInnerHTML={{
                      __html: `!function() {
                        var t;
                        if (t = window.driftt = window.drift = window.driftt || [], !t.init) return t.invoked ? void (window.console && console.error && console.error("Drift snippet included twice.")) : (t.invoked = !0,
                        t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ],
                        t.factory = function(e) {
                          return function() {
                            var n;
                            return n = Array.prototype.slice.call(arguments), n.unshift(e), t.push(n), t;
                          };
                        }, t.methods.forEach(function(e) {
                          t[e] = t.factory(e);
                        }), t.load = function(t) {
                          var e, n, o, i;
                          e = 3e5, i = Math.ceil(new Date() / e) * e, o = document.createElement("script"),
                          o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + i + "/" + t + ".js",
                          n = document.getElementsByTagName("script")[0], n.parentNode.insertBefore(o, n);
                        });
                      }();
                      drift.SNIPPET_VERSION = '0.3.1';
                      drift.load('ga3xr9fhvs4d');`
                    }}/></div>
                  <div className='clear'></div>
                </div>

                <div>
                    {this.props.children()}
                </div>
            </div>
        )
    }
}
