import React, { useEffect } from 'react';
import ReviewCard from './ReviewCard'
import ReviewForm from './ReviewForm'
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { addReview, fetchReviews, destroyReview } from '../Actions/reviewActions'


const ReviewContainer = (props) => {

    useEffect(() => { 
        fetch("http://localhost:4000/reviews")
            .then(r => r.json())
            .then(reviewsArr => {
                props.fetchReviews(reviewsArr)
            })
    }, [])

    const createReview = (newReview) => {
        fetch('http://localhost:4000/reviews', {
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
        
        fetch(`http://localhost:4000/reviews/${reviewId}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(deletedReview => {
            props.destroyReview(deletedReview.review)
        })
    }

        let reviewItem = props.reviews.filter(review => review.item_id === parseInt(props.matchProps.params.id))
        let reviews = reviewItem.map(review => <ReviewCard key={review.id} review={review} deleteReview={deleteReview} />)

        // if user bought item (part of orders array) they can review the item otherwise no
        // const userOrders = () => {
        //     if(props.orders){
        //         let idFromOrderItem = props.orders.map(order => order.items.map(item => item.id)).find(id => id === parseInt(props.matchProps.params.id))
        //         return idFromOrderItem
        //     }return null
        // }

        return (
            <div>
                <Container>
                    Reviews: 
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