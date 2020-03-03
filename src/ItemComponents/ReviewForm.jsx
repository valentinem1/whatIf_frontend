import React, { Component } from 'react'
import { Form, Button, Rating } from 'semantic-ui-react'

class ReviewForm extends Component {

    state={
        comment: "",
        rating: 0
    }

    handleChange = (event, { rating }) => {
        let {name, value} = event.target

        this.setState({
            [name]: value,
            rating
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createReview(this.state)
        this.setState({
            comment: "",
            rating: 0
        })
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.TextArea
                    label='Leave a review here'
                    placeholder="Write your thoughts"
                    name="comment"
                    value={this.state.comment}
                    onChange={this.handleChange}
                />
                <Rating
                    name="rating"
                    onRate={this.handleChange}
                    icon="star" 
                    maxRating={5} 
                    clearable
                />
                <br/>
                <Button className="create-review-button" type='submit'>Submit</Button>
            </Form>
        )
    }
}

export default ReviewForm;
