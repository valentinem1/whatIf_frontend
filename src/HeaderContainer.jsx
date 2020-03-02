import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { Segment, Header, Menu, Icon, Modal, Button } from 'semantic-ui-react'
import LoginSignupForm from './LoginSignupForm'

class HeaderContainer extends Component {

    logOutUser = () => {
        localStorage.clear()
        this.props.historyProps.history.push("/")
    }

    render() {
        // console.log(this.props.historyProps)
        return (

            <div>

            <Segment className="logo">
                <Header><Link to="/"><i className="cib-etsy">Watif</i></Link></Header>
                
                        {localStorage.token ? 
                        <Header>
                        <Menu className="logged-in-menu-bar">
                        <Menu.Item>
                            <Link to="/profile">Profile</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/orders">Orders</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/cart"><Icon name="shopping cart" size="large"/></Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link onClick={this.logOutUser} to="/"><Icon name="sign-out" size="large"/></Link>
                        </Menu.Item>
                        </Menu>
                        </Header> : 
                        <Header className="signup-menu-bar">
                        <Menu>
                        <Menu.Item>
                        <Modal trigger={<p className="sign-in">Sign in</p>}>
                            <LoginSignupForm history={this.props.historyProps.history}/>
                        </Modal>
                        </Menu.Item>
                        </Menu>
                        </Header>
                        }
            </Segment>
                
            </div>

        );
    }
}

export default HeaderContainer;