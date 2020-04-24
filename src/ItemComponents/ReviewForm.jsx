import React, { Component } from 'react'
import { Form, Button, Rating } from 'semantic-ui-react'

class ReviewForm extends Component {

    // set the state to empty values
    state={
        comment: "",
        rating: 0
    }

    // Gets called every time a change is made in the form. It makes the form dynamic and allows to dynamically set the state.
    // second argument rating give us access to the value of the rating input.
    handleChange = (event, { rating }) => {
        let {name, value} = event.target

        this.setState({
            // Instead of having to tap each key value pairs from the state it dynamically assign it.
            [name]: value,
            rating
        })
    }

    // get triggered when submitting the form.
    handleSubmit = (event) => {
        // prevent the browser from refreshing when submitting the form.
        event.preventDefault()
        //calls the createReview function from ReviewContainer with the entire state which is all the values for the review to create.
        this.props.createReview(this.state)

        // then reset the state to be empty. It clears out the form input field and the rating.
        this.setState({
            comment: "",
            rating: 0
        })
    }

    render() {
        return (
            <Form hidden={localStorage.token ? false : true} onSubmit={this.handleSubmit}>
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
