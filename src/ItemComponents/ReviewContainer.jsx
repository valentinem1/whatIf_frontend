import React, { Component } from 'react';
import ReviewCard from './ReviewCard'
import ReviewForm from './ReviewForm'
import { Container } from 'semantic-ui-react';


class ReviewContainer extends Component {

    state={
        reviews: []
    }

    componentDidMount() {
        fetch('http://localhost:4000/reviews')
        .then(r => r.json())
        .then(reviewsArr => {
            this.setState({
                reviews: reviewsArr
            })
        })
    }

    createReview = (newReview) => {
        fetch('http://localhost:4000/reviews', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Authorization": `bearer ${localStorage.token}`
            },
            body: JSON.stringify({
                comment: newReview.comment,
                rating: newReview.rating,
                item_id: parseInt(this.props.matchProps.params.id)
            })
        })
        .then(r => r.json())
        .then(review => {
                this.setState({
                    reviews: [...this.state.reviews, review]
            })
        })
    }

    deleteReview = (reviewId) => {
        // console.log(reviewId)
        
        fetch(`http://localhost:4000/reviews/${reviewId}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(review => {
            let newReviewArr = this.state.reviews.filter(review => review.id !== reviewId)
            this.setState({
                reviews: newReviewArr
                })
            }
        )
    }

    
    render() {
        // console.log(this.props)
        let reviewItem = this.state.reviews.filter(review => review.item_id === parseInt(this.props.matchProps.params.id))
        
        let reviews = reviewItem.map(review => <ReviewCard key={review.id} review={review} deleteReview={this.deleteReview} />)
        return (
            <div>
                <Container>
                    Reviews: 
                    {reviews}
                    <ReviewForm createReview={this.createReview} />
                </Container>
            </div>
        );
    }
}

export default ReviewContainer;