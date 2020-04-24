import React from 'react';
import { connect } from 'react-redux'
import { Container, Rating } from 'semantic-ui-react'

const ReviewCard = (props) => {

    // get triggered when clicking on delete.
    const handleDelete = () => {
        // calls the deleteReview function from ReviewContainer with the review id to delete.
        props.deleteReview(props.review.id)
    }

    // check if the logged in user matchs the user who wrote the review to show the delete button.
    const showDeleteButton = () => {
        // check if the token exist and if the user id matchs the user id from the review.
        if(localStorage.token && props.review.user_id === props.user.id){
            // if yes it will show the delete button.
            return <span className="review-delete-button" onClick={handleDelete}>Delete</span>
        }
    }

    return (
            <Container>
                <p className="review-username">{props.review.username} - <span className="review-post-time">{props.review.created_at}</span></p>
                <Rating className="rating-stars-card" icon='star' defaultRating={props.review.rating} maxRating={5} disabled /> 
                <p className="review-comment">{props.review.comment} {showDeleteButton()}</p>
            </Container>
    );

};

// Any time the store is updated, mapStateToProps will be called. The results of mapStateToProps will be merged into the wrapped component’s props.
const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}

// connect, connects the component with redux to provide the piece of data needed from the store. The first argument of connect must be the function that merge the state to the component's props like mapStateToProps otherwise null if this function isn't needed, second argument isn't needed in that situation since we do not need any actions from the store.
export default connect(mapStateToProps)(ReviewCard);