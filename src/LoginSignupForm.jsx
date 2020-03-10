import React, { Component } from 'react';
import { Button, Form, Modal } from 'semantic-ui-react'

import { connect } from 'react-redux'
import { setUser } from './Actions/userActions'
import { loginError } from './Actions/loginErrorsActions'

class LoginSignupForm extends Component {

    state={
        first_name: "",
        last_name: "",
        username: "",
        address: "",
        email: "",
        picture: "",
        password: "",
        display: true
    }

    handleChange = (event) => {
        let {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    renderFormFields = () => {
            const showSignUp = () => {
                this.setState(prevState => {
                    return{
                        display: !prevState.display
                    }
                })
            }

            return ( 
                <>
                {this.state.display ? 
                    <>
                    <Modal.Header className="login-signup-header">Login</Modal.Header>
                    <Modal.Description>
                        <Form.Field className="login-signup-form">
                            <label className="login-signup-labels">Username</label>
                            <input 
                                className="login-signup-input-field"
                                type="text"
                                placeholder="Username"
                                name="username"
                                value={this.state.username}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                        <Form.Field className="login-signup-form">
                            <label className="login-signup-labels">Password</label>
                            <input
                                className="login-signup-input-field"
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                        <p>{this.props.error.errors}</p>
                    </Modal.Description>
                    <Button className="login-signup-submit-btn" type='submit'>Submit</Button>
                    <div className="check-if-have-account">
                        <p className="have-account-title">Don't have an account? </p>
                        <p className="signup-login-route-button" onClick={showSignUp}>Please sign up.</p>
                    </div>
                    </> : 
                    <>
                    <Modal.Header className="login-signup-header">Signup</Modal.Header>
                    <Modal.Description>  
                        <Form.Field className="login-signup-form">
                            <label className="login-signup-labels">First Name</label>
                            <input 
                                className="login-signup-input-field"
                                type="text"
                                placeholder="First Name"
                                name="first_name"
                                value={this.state.first_name}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                        <Form.Field className="login-signup-form">
                            <label className="login-signup-labels">Last Name</label>
                            <input
                                className="login-signup-input-field"
                                type="text"
                                placeholder="Last Name"
                                name="last_name"
                                value={this.state.last_name}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                        <Form.Field className="login-signup-form">
                            <label className="login-signup-labels">Username</label>
                            <input 
                                className="login-signup-input-field"
                                type="text"
                                placeholder="Username"
                                name="username"
                                value={this.state.username}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                        <Form.Field className="login-signup-form">
                            <label className="login-signup-labels">Address</label>
                            <input
                                className="login-signup-input-field"
                                type="text"
                                placeholder="Address"
                                name="address"
                                value={this.state.address}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                        <Form.Field className="login-signup-form">
                            <label className="login-signup-labels">Email</label>
                            <input
                                className="login-signup-input-field"
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                        <Form.Field className="login-signup-form">
                            <label className="login-signup-labels">Picture</label>
                            <input
                                className="login-signup-input-field"
                                type="text"
                                placeholder="Picture"
                                name="picture"
                                value={this.state.picture}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                        <Form.Field className="login-signup-form">
                            <label className="login-signup-labels">Password</label>
                            <input
                                className="login-signup-input-field"
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                    </Modal.Description>
                    <Button className="login-signup-submit-btn" type='submit'>Submit</Button>
                    <div className="check-if-have-account">
                        <p className="have-account-title">Already with us?</p> 
                        <p className="signup-login-route-button" onClick={showSignUp}>Please login</p>
                    </div>
                    </>
                    }
                </>
        )
    }

    handleSubmit = (event) => {
        event.preventDefault()

        let { first_name, last_name, username, address, email, picture, password } = this.state
            fetch(`http://localhost:4000/${this.state.display ? "login" : "users"}`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(
                    this.state.display ? {username: username, password: password} : { first_name: first_name,
                    last_name: last_name,
                    username: username,
                    address: address,
                    email: email,
                    picture: picture,
                    password: password,
                })
            })
            .then(r => r.json())
            .then(userData => {
                if(userData.user){
                    localStorage.setItem("token", userData.token)
                    this.props.setUser(userData.user)
                    this.props.history.push("/profile")
                }
                else{
                    console.log(userData)
                    this.props.loginError(userData)
                }
            })
        }
        
        render() {
            console.log(this.props.error.errors)
        return (

            <Form onSubmit={this.handleSubmit}>
                {this.renderFormFields()}
            </Form>

        );
        
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return{
        error: state.errors
    }
}

export default connect(mapStateToProps, { setUser, loginError })(LoginSignupForm);