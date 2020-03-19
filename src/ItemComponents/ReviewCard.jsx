import React from 'react';
import { connect } from 'react-redux'
import { Container, Rating } from 'semantic-ui-react'

const ReviewCard = (props) => {
    const handleDelete = () => {
        props.deleteReview(props.review.id)
    }

    const showDeleteButton = () => {
        if(localStorage.token && props.review.user_id === props.user.id){
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

const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(ReviewCard);