import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuAnimation: '',
      menuItemsAnimation: ''
    }
  }

  openMenu() {
    this.setState({openDisplay: 'none', closeDisplay: 'block', menuAnimation: 'openMenu 0.5s forwards', menuItemsAnimation: 'show 0.5s 0.5s forwards'})
  }

  closeMenu() {
    this.setState({openDisplay: 'block', closeDisplay: 'none', menuAnimation: 'closeMenu 0.5s forwards', menuItemsAnimation: 'hidden 0.1s forwards'})
  }

  render() {
    return (
      <div>
        <div className="hero-head" style={{
          paddingTop: '10px'
        }}>
          <nav className="navbar is-transparent">
            <div className="container">
              <div className="navbar-brand">
                <Link to="/" className="navbar-item has-text-black">

                  <h1 className="subtitle has-text-bold" style={{backgroundColor:"black", color:"white", textAlign:"center", fontSize:"30px", fontWeight: "bold", padding: "10px 17.5px"}}>W</h1>

                </Link>

                <button id='openBtn' className='menuBtn' onClick={()=>this.openMenu()} style={{display:`${this.state.openDisplay}`}}>
                  Menu
                </button>
              </div>

              <div id="navMenu" className="navbar-menu" data-target="navMenu">
                <div className="navbar-end">




                  <span className="navbar-item">

                    <a className="button is-black is-outlined has-text-weight-bold" href="mailto:contact@waverly.co">
                      <p>Get Started</p>
                    </a>

                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div id='mobileMenu' style={{animation:`${this.state.menuAnimation}`}}>
          <button id='closeBtn' className='menuBtn has-text-black is-size-3' onClick={()=>this.closeMenu()} style={{display:`${this.state.closeDisplay}`}}>
            X
          </button>
          <div className="menuItems" style={{animation:`${this.state.menuItemsAnimation}`}}>
            <Link onClick={()=>this.closeMenu()} to="/" id='mobileLogo'>
            <img src="https://s3.amazonaws.com/joinswaybucket/white_logo.png"/>
            </Link>
            <div className="menuItem">
               <p className="is-size-3 subtitle has-text-weight-bold is-uppercase" style={{padding:'10px 0'}}>
               <Link to="/work" className="navbar-item is-size-5 has-text-black" style={{
                 color: 'black'
               }}>
                 Our work
               </Link>

               </p>
            </div>

            <div className="menuItem">
            <p className="is-size-3 subtitle has-text-weight-bold is-uppercase" style={{padding:'10px 0'}}>

            <a className="button is-black is-outlined has-text-weight-bold" href="mailto:contact@waverly.co">
              <p>Get Started</p>
            </a>
              </p>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Navbar;
