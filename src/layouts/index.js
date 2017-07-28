import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"

import "../css/typography.css"
import {Input, Menu} from 'semantic-ui-react'

export default class Template extends React.Component {
    state = {
        activeItem: 'home'
    }

    handleItemClick = (e, {name}) => this.setState({activeItem: name})
    static propTypes = {
        children: PropTypes.func
    }

    render() {
        const {activeItem} = this.state

        return (
            <div>
                <Helmet title="Waverly Studios" meta={[
                    {
                        name: "description",
                        content: "Sample"
                    }, {
                        name: "keywords",
                        content: "sample, something"
                    }
                ]}/>
                <Menu stackable secondary style={{
                    margin: `0 auto`,
                    maxWidth: '90%',
                    padding: `0px 1.0875rem 1.45rem`,
                    paddingTop: 50
                }}>
                    <Menu.Item >
                        <p style={{
                            fontSize: '24px',
                            fontWeight: 100
                        }}>WAVELRY</p>
                    </Menu.Item>


                    {/*
                        <Menu.Item name='work' active={activeItem === 'work'}>
                            <Link to="/work/">Work</Link>
                        </Menu.Item>
                        <Menu.Item name='ventures' active={activeItem === 'ventures'}>
                            <Link to="/work/">Ventures</Link>
                        </Menu.Item>
                        <Menu.Item name='services' active={activeItem === 'services'}>
                            <Link to="/work/">Services</Link>
                        </Menu.Item>
                        <Menu.Item name='about' active={activeItem === 'about'}>
                            <Link to="/work/">About</Link>
                        </Menu.Item>
                        */}

                </Menu>
                <div>
                    {this.props.children()}
                </div>
            </div>
        )
    }
}
