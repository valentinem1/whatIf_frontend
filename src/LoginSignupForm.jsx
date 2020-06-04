import React, { Component } from 'react';
import { Button, Form, Modal } from 'semantic-ui-react'

import { connect } from 'react-redux'
import { setUser } from './Actions/userActions'
import { loginError } from './Actions/loginErrorsActions'

class LoginSignupForm extends Component {
// set the state with empty strings. The inputs from the form will them fill up the empty strings with the value inputed.
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

    // Gets called every time a change is made in the form. It makes the form dynamic and allows to dynamically set the state.
    handleChange = (event) => {
        let {name, value} = event.target
        this.setState({
            // Instead of having to tap each key value pairs from the state it dynamically assign it.
            [name]: value
        })
    }

    // renders the form
    renderFormFields = () => {
        // gets triggered when clicking on sign-up or log-in. Allows to make the component reusable.
        const showSignUp = () => {
            // changes the state to opposite when triggered. Allows to display the sign-up or log-in form only when clicking on log-in or sign-up.
            this.setState(prevState => {
                return{
                    display: !prevState.display
                }
            })
            // set the loggin error to an empty string to the state by calling the loginError action which will trigger the store to call the reducer to change the state. Otherwise everytime an error is made during logging the error message will stay even after closing the logging card.
            this.props.loginError("")
        }

    return ( 
        <>
        {/* check if display is true in state then sho the sign-in card otherwise show the sign-up card. */}
        {this.state.display ?
        <>
        <Modal.Header className="login-signup-header">Sign in</Modal.Header>
        <Modal.Description>
            <Form.Field className="login-form">
                <label className="login-labels">Username</label>
                <Form.Input 
                    icon='user'
                    iconPosition='left'
                    className="login-signup-input-field"
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={this.state.username} // the state control the form through the value from the state.
                    onChange={this.handleChange} // the form controls the state with every input dynamically changing the state with the handleChange function.
                />
            </Form.Field>
            <Form.Field className="login-form">
                <label className="login-labels">Password</label>
                <Form.Input
                    icon='lock'
                    iconPosition='left'
                    className="login-signup-input-field"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={this.state.password} // the state control the form through the value from the state.
                    onChange={this.handleChange} // the form controls the state with every input dynamically changing the state with the handleChange function.
                />
            </Form.Field>
            <p className="invalid-logins">{this.props.error.errors}</p>
        </Modal.Description>
        <Form.Field className="login-signup-submit-btn" color="blue" control={Button}>Sign in</Form.Field>
        <div className="check-if-have-account">
            <p className="have-account-title">Don't have an account? </p>
            <p className="signup-login-route-button" onClick={showSignUp}>Please sign up.</p>
        </div>
        </> : 
        <>
        <Modal.Header className="login-signup-header">Signup</Modal.Header>
        <Modal.Description>  
            <Form.Field className="login-signup-form">
                <label className="signup-labels">First Name</label>
                <Form.Input
                    icon='user'
                    iconPosition='left'
                    className="login-signup-input-field"
                    type="text"
                    placeholder="First Name"
                    name="first_name"
                    value={this.state.first_name} // the state control the form through the value from the state.
                    onChange={this.handleChange} // the form controls the state with every input dynamically changing the state with the handleChange function.
                />
            </Form.Field>
            <Form.Field className="login-signup-form">
                <label className="signup-labels">Last Name</label>
                <Form.Input
                    icon='user'
                    iconPosition='left'
                    className="login-signup-input-field"
                    type="text"
                    placeholder="Last Name"
                    name="last_name"
                    value={this.state.last_name} // the state control the form through the value from the state.
                    onChange={this.handleChange} // the form controls the state with every input dynamically changing the state with the handleChange function.
                />
            </Form.Field>
            <Form.Field className="login-signup-form">
                <label className="signup-labels">Username</label>
                <Form.Input 
                    icon='user'
                    iconPosition='left'
                    className="login-signup-input-field"
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={this.state.username} // the state control the form through the value from the state.
                    onChange={this.handleChange} // the form controls the state with every input dynamically changing the state with the handleChange function.
                />
            </Form.Field>
            <Form.Field className="login-signup-form">
                <label className="signup-labels">Address</label>
                <Form.Input
                    icon='home'
                    iconPosition='left'
                    className="login-signup-input-field"
                    type="text"
                    placeholder="Address"
                    name="address"
                    value={this.state.address} // the state control the form through the value from the state.
                    onChange={this.handleChange} // the form controls the state with every input dynamically changing the state with the handleChange function.
                />
            </Form.Field>
            <Form.Field className="login-signup-form">
                <label className="signup-labels">Email</label>
                <Form.Input
                    icon='envelope'
                    iconPosition='left'
                    className="login-signup-input-field"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={this.state.email} // the state control the form through the value from the state.
                    onChange={this.handleChange} // the form controls the state with every input dynamically changing the state with the handleChange function.
                />
            </Form.Field>
            <Form.Field className="login-signup-form">
                <label className="signup-labels">Picture</label>
                <Form.Input
                    icon='file image'
                    iconPosition='left'
                    className="login-signup-input-field"
                    type="text"
                    placeholder="Picture"
                    name="picture"
                    value={this.state.picture} // the state control the form through the value from the state.
                    onChange={this.handleChange} // the form controls the state with every input dynamically changing the state with the handleChange function.
                />
            </Form.Field>
            <Form.Field className="login-signup-form">
                <label className="signup-labels">Password</label>
                <Form.Input
                    icon='lock'
                    iconPosition='left'
                    className="login-signup-input-field"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={this.state.password} // the state control the form through the value from the state.
                    onChange={this.handleChange} // the form controls the state with every input dynamically changing the state with the handleChange function.
                />
            </Form.Field>
            {/* displays logging errors if user doesn't fill up every i */}
            <p className="invalid-logins">{this.props.error.errors}</p> 
        </Modal.Description>
        <Form.Field className="login-signup-submit-btn" color="blue" control={Button}>Sign up</Form.Field>
                
        <div className="check-if-have-account">
            <p className="have-account-title">Already with us?</p> 
            <p className="signup-login-route-button" onClick={showSignUp}>Please login</p>
        </div>
        </>
        }
        </>
        )
    }
    
    // get triggered when submitting the form.
    handleSubmit = (event) => {
        // prevent the browser from refreshing when submitting the form.
        event.preventDefault()

        // destructuring the state using ES6 destructuring feature
        let { first_name, last_name, username, address, email, picture, password } = this.state

        // fetching to back end to either login to log the user or users to create a user. It depend on what card is display sign-u or log-in
            fetch(`https://watif-api.herokuapp.com/${this.state.display ? "login" : "users"}`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                // sending all the information from the form to either log or create a user
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
            // user instance get sent back
            .then(userData => {
                // if the user exist which means already has an account we set localStorage token to the one created in the back end.
                if(userData.user){
                    localStorage.setItem("token", userData.token)
                    // set the user instance to the state by calling the setUser action which will trigger the store to call the reducer to change the state.
                    this.props.setUser(userData.user)
                    // then push the user to its profile using the history prop push
                    this.props.history.push("/profile")
                }
                else{
                    // if the user doesn't exist we then set loggin error to the state by calling the logingError action which trigger the store to call the reducer to change the state with the userData in this case will be the logging error sent back from the back end. The back end for loggin checks if the username and password match if not it will render an error. If input field are empty in the back end it will check if the info sent correspond to the params if empty it expect all field to be filled it will then render an error.
                    this.props.loginError(userData)
                }
            })
        }
        
        render() {
        return (

            <Form onSubmit={this.handleSubmit}>
                {/* calls the render form function which renders the form itself. */}
                {this.renderFormFields()}
            </Form>

        );
        
    }
}

// Any time the store is updated, mapStateToProps will be called. The results of mapStateToProps will be merged into the wrapped component’s props.
const mapStateToProps = (state) => {
    return{
        error: state.errors
    }
}

// connect, connects the component with redux to provide the piece of data needed from the store. The first argument of connect must be the function that merge the state to the component's props like mapStateToProps, second argument like { setUser, loginError } an ES6 destructuring feature must be the function(s) that dispatches the actions to the store.
export default connect(mapStateToProps, { setUser, loginError })(LoginSignupForm);