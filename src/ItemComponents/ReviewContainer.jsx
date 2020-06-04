import React, { useEffect } from 'react';
import ReviewCard from './ReviewCard'
import ReviewForm from './ReviewForm'
import { Container, Header } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { addReview, fetchReviews, destroyReview } from '../Actions/reviewActions'


const ReviewContainer = (props) => {

    // perform like componentDidMount() it will be called after the component is mounted and the DOM renders the html. Allows to perform API calls and change the state.
    useEffect(() => { 
        // fetching the reviews from the back end. We give the useEffect an empty array as second argument to run only when the component initialize. It copies the functionalities of componentDidMount().
        fetch("https://watif-api.herokuapp.com/reviews")
            .then(r => r.json())
            .then(reviewsArr => {
                // reviews array get sent back as a response.
                // add the array of reviews to the state by calling the fetchReviews action which will trigger the store to call the reducer to change the state. Pass it as argument the array of reviews.
                props.fetchReviews(reviewsArr)
            })
    }, [])

    // fetch new review to the reviews once clicking on submit review.
    const createReview = (newReview) => {
        fetch('https://watif-api.herokuapp.com/reviews', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                // send the token to assure that the review(s) are added to the logged in user reviews.
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
            // the review instance get sent back as response.
            // add the review to the state by calling the addReviews action which will trigger the store to call the reducer to change the state. Pass it as argument the review instance.
            props.addReview(review)
        })
    }

    // fetch the review to the review to get deleted once clicking the delete button.
    const deleteReview = (reviewId) => {
        // in the url we pass the review id that get sent from the review card that clicked to delete.
        fetch(`https://watif-api.herokuapp.com/reviews/${reviewId}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(deletedReview => {
            // the review instance that has been deleted get sent back as a response.
            // sent the deleted review to the state by calling the destroyReview action which will trigger the store to call the reducer to change the state. Pass it as argument the review instance. It will get filtered out in the reducer to remove it.
            props.destroyReview(deletedReview.review)
        })
    }

        // filters out only the reviews that belongs the item displayed on the page.
        // check if the item_id on the review equals to the item id from the dynamic url(params).
        // it will return an array of reviews that belong to the item.
        let reviewItem = props.reviews.filter(review => review.item_id === parseInt(props.matchProps.params.id))
        // mapping over the reviews array to display a review card for each of them.
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

// Any time the store is updated, mapStateToProps will be called. The results of mapStateToProps will be merged into the wrapped component’s props.
const mapStateToProps = (state) => {
    return{
        orders: state.user.orders,
        reviews: state.reviews
    }
}

// connect, connects the component with redux to provide the piece of data needed from the store. The first argument of connect must be the function that merge the state to the component's props like mapStateToProps otherwise null if this function isn't needed, second argument like { addReview, fetchReviews, destroyReview  } an ES6 destructuring feature must be the function(s) that dispatches the actions to the store.
export default connect(mapStateToProps, { addReview, fetchReviews, destroyReview })(ReviewContainer);