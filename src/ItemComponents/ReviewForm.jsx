import React, { Component } from 'react'
import { Form, Button, Rating } from 'semantic-ui-react'

class ReviewForm extends Component {

    state={
        comment: "",
        rating: 0
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
            body: JSON.stringify({
                comment: this.state.comment,
                rating: this.state.rating,
                item_id: parseInt(this.props.matchProps.params.id)
            })
        })
        .then(r => r.json())
        .then(review => {
            this.setState({
                comment: review.comment,
                rating: review.rating
            })
        })
    }

    render() {
        // console.log(this.props.matchProps.params)
        return (
            
            <Form onSubmit={this.createReview}>
                <Form.TextArea
                    label='Review'
                    placeholder="Write your thoughts"
                    name="comment"
                    value={this.state.comment}
                    onChange={this.handleChange}
                />
                <Rating
                    name="rating"
                    value={this.state.rating}
                    onChange={this.handleChange}
                    icon="star" 
                    maxRating={5} 
                    clearable
                />
                <br/>
                <Button type='submit'>Submit</Button>
            </Form>
        )
    }
}

export default ReviewForm
