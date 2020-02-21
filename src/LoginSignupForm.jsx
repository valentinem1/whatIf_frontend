import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'

import { connect } from 'react-redux'
import { setUser } from './Actions/userActions'

class LoginSignupForm extends Component {

    state={
        first_name: "",
        last_name: "",
        username: "",
        address: "",
        email: "",
        picture: "",
        password: ""
    }

    handleChange = (event) => {
        let {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    renderFormFields = () => {
        // If routerProps.location.pathname === "/login"
        // only show username and password field
        // else if routerProps.location.pathname === "/signup"
        // show entire form
        // {this.routerProps.location.pathname === "/login" ? }
        let pathname = this.props.location.pathname

        if(pathname === "/login"){
            return <>
                        <Form.Field>
                            <label>Username</label>
                            <input 
                                type="text"
                                placeholder="Username"
                                name="username"
                                value={this.state.username}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                    </>
        }else if(pathname === "/signup"){
            return <>   <Form.Field>
                            <label>First Name</label>
                            <input 
                                type="text"
                                placeholder="First Name"
                                name="first_name"
                                value={this.state.first_name}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Last Name</label>
                            <input 
                                type="text"
                                placeholder="Last Name"
                                name="last_name"
                                value={this.state.last_name}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Username</label>
                            <input 
                                type="text"
                                placeholder="Username"
                                name="username"
                                value={this.state.username}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Address</label>
                            <input
                                type="text"
                                placeholder="Address"
                                name="address"
                                value={this.state.address}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Picture</label>
                            <input
                                type="text"
                                placeholder="Picture"
                                name="picture"
                                value={this.state.picture}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
            </>
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()

        let pathname = this.props.location.pathname

        // if(pathname === "/login"){

            fetch(`http://localhost:4000/${pathname === "/login" ? "login" : "users"}`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(
                    pathname === "/login" ? {username: this.state.username, password: this.state.password} : (this.state)
                )
            })
            .then(r => r.json())
            .then(userData => {
                console.log(userData)
                localStorage.setItem("token", userData.token)
                this.props.setUser(userData.user)
                this.props.history.push("/profile")
            })

        // }else if(pathname === "/signup"){

        //     fetch('http://localhost:4000/users', {
        //         method: "POST",
        //         headers: {
        //             "content-type": "application/json",
        //         },
        //         body: JSON.stringify(this.state)
        //     })
        //     .then(r => r.json())
        //     .then(newUser => {
        //         if(!newUser.error){
        //             localStorage.setItem("token", newUser.token)
        //             this.props.setUser(newUser)
        //             this.props.routerProps.history.push("/")
        //         }
        //         this.setState({
        //             first_name: "",
        //             last_name: "",
        //             username: "",
        //             address: "",
        //             email: "",
        //             picture: "",
        //             password: ""
        //         })
        //     })
        
        // }
    }

    render() {
        // console.log(this.props)
        return (

            <Form onSubmit={this.handleSubmit}>
                {this.renderFormFields()}
                <Button type='submit'>Submit</Button>
            </Form>

        );
        
    }
}

export default connect(null, { setUser })(LoginSignupForm);