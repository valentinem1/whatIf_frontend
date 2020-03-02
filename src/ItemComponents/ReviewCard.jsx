import React from 'react';
import { Container, Rating } from 'semantic-ui-react'

const ReviewCard = (props) => {

    // console.log(props)
    const handleDelete = (event) => {
        props.deleteReview(props.review.id)
    }

    const showDeleteButtom = () => {
        if(localStorage.token){
            return <button onClick={handleDelete}>x</button>
        }
    }
    return (
            <Container>
                {showDeleteButtom()}
                {props.review.comment}
                <Rating icon='star' defaultRating={props.review.rating} maxRating={5} disabled /> 
            </Container>
        
    );

};

export default ReviewCard;