import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

class ReviewForm extends Component {

    state={
        comment: ""
    }

    handleChange = (event) => {
        let {name, value} = event.target

        this.setState({
            [name]: value
        })
    }

    createReview = (event) => {
        event.preventDefault()

        fetch('http://localhost:4000/reviews', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Authorization": `bearer ${localStorage.token}`
            },
            body: JSON.stringify()
        })
    }

    render() {

        return (
            
            <Form onSubmit={this.createReview}>
                <Form.TextArea
                    // <label>Comment</label>
                    // <input 
                    //     type="textarea"
                    //     placeholder="Comment"
                    //     name="comment"
                    //     value={this.state.comment}
                    // />
                    label='Review'
                    placeholder="Write your thoughts"
                    name="comment"
                    value={this.state.comment}
                    onChange={this.handleChange}
                />
                <Button type='submit'>Submit</Button>
            </Form>
        )
    }
}

export default ReviewForm
