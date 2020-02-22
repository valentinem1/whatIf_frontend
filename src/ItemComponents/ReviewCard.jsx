import React from 'react';
import { Container } from 'semantic-ui-react'

const ReviewCard = (props) => {

    // console.log(props)

    return (

            <Container>
                {props.review.comment}
            </Container>
        
    );

};

export default ReviewCard;