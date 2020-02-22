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
    
    
    render() {

        let reviewItem = this.state.reviews.filter(review => review.item_id === parseInt(this.props.matchProps.params.id))
        
        let reviews = reviewItem.map(review => <ReviewCard key={review.id} review={review} />)
        return (
            <div>
                <Container>
                    Reviews: 
                    {reviews}
                    <ReviewForm matchProps={this.props.matchProps}/>
                </Container>
            </div>
        );
    }
}

export default ReviewContainer;