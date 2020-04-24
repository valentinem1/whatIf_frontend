import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { Segment, Header, Menu, Icon, Modal } from 'semantic-ui-react'
import LoginSignupForm from './LoginSignupForm'
import { connect } from 'react-redux'
import { loginError } from './Actions/loginErrorsActions'

class HeaderContainer extends Component {

    // function that get triggered by clicking on the log out icon and log out the user.
    logOutUser = () => {
        //clear localStorage which clears the token and then log out the user since no token are there anymore.
        localStorage.clear()
        // after being logged out the user get redirected to the home page by using the history props which allows to push to a different url path.
        this.props.historyProps.history.push("/")
    }

    // gets triggered when clicking on the sign-in button. It clears the logging errors.
    clearError = () => {
        // set the loggin error to an empty string to the state by calling the loginError action which will trigger the store to call the reducer to change the state.
        this.props.loginError("") 
    }

    render() {
        return (
            <div>
            <Segment className="logo">
                <Header><Link to="/"><i className="watif-logo">Watif</i></Link></Header>
                {/* check if the user is logged in by checking a token exist. If it exist it will show the profile, cart and log out buttons. */}
                        {localStorage.token ? 
                        <Header className="logged-in-menu-header">
                        <Menu className="logged-in-menu-bar">
                        <Menu.Item>
                            <Link id="menu-bar-tags" to="/profile">Profile</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link id="menu-bar-tags" to="/cart"><Icon name="shopping cart" size="large"/></Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link id="menu-bar-tags" onClick={this.logOutUser} to="/"><Icon name="sign-out" size="large"/></Link>
                        </Menu.Item>
                        </Menu>
                        </Header> : 
                        // If the token doesn't exist It will show the Sign in button.
                        <Header className="signup-menu-bar">
                        <Menu>
                        <Menu.Item>
                        <Modal  trigger={<p onClick={this.clearError} className="sign-in">Sign in</p>}>
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
// connect, connects the component with redux to provide the piece of data needed from the store.
export default connect(null, { loginError })(HeaderContainer);