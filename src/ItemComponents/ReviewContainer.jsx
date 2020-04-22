import React, { useEffect } from 'react';
import ReviewCard from './ReviewCard'
import ReviewForm from './ReviewForm'
import { Container, Header } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { addReview, fetchReviews, destroyReview } from '../Actions/reviewActions'


const ReviewContainer = (props) => {

    useEffect(() => { 
        fetch("https://watif-app-api.herokuapp.com/reviews")
            .then(r => r.json())
            .then(reviewsArr => {
                props.fetchReviews(reviewsArr)
            })
    }, [])

    const createReview = (newReview) => {
        fetch('https://watif-app-api.herokuapp.com/reviews', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Authorization": `bearer ${localStorage.token}`
            },
            body: JSON.stringify({
                comment: newReview.comment,
                rating: newReview.rating,
                item_id: parseInt(props.matchProps.params.id)
            })
        })
        .then(r => r.json())
        .then(review => {
            props.addReview(review)
        })
    }

    const deleteReview = (reviewId) => {
        
        fetch(`https://watif-app-api.herokuapp.com/reviews/${reviewId}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(deletedReview => {
            props.destroyReview(deletedReview.review)
        })
    }

        let reviewItem = props.reviews.filter(review => review.item_id === parseInt(props.matchProps.params.id))
        let reviews = reviewItem.map(review => <ReviewCard key={review.id} review={review} deleteReview={deleteReview} />)
    // console.log(reviews)
        return (
            <div>
                <Container>
                    <Header className="review-header">Reviews for this item:</Header> 
                    <p className="no-reviews" hidden={reviews.length <= 0 ? false : true}>There is no reviews yet. Be the first one!</p>
                    {reviews}
                    <ReviewForm createReview={createReview} />
                </Container>
            </div>
        );
    }

    const mapStateToProps = (state) => {
        return{
            orders: state.user.orders,
            reviews: state.reviews
        }
    }

export default connect(mapStateToProps, { addReview, fetchReviews, destroyReview })(ReviewContainer);