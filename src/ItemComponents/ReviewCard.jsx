import React from 'react';
import { Container, Rating } from 'semantic-ui-react'

const ReviewCard = (props) => {

    // console.log(props)
    const handleDelete = (event) => {
        // console.log(props.review.id)
        props.deleteReview(props.review.id)
    }

    return (
            <Container>
                <button onClick={handleDelete}>x</button>
                {props.review.comment}
                <Rating icon='star' defaultRating={props.review.rating} maxRating={5} disabled /> 
            </Container>
        
    );

};

export default ReviewCard;