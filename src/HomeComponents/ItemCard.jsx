import React from 'react';
import { Card, Image, Rating } from 'semantic-ui-react'

const ItemCard = (props) => {

    // console.log(props.item.reviews)
    // Review average add up all the numbers and divide them by the number of ratings
    // const reviews = (total, num) => {
    //     return total + num
    // }
    // function averageReviews (reviews){
        //     for(let i=0 ; i < reviews.length; i++) {
            //         return reviews[i].rating
            //     }
            // }
        // let reviews = props.item.reviews

        // let review = reviews.map(review => review.rating)

        // let average = review.reduce((total, num) => total + num)
    // const averageReviews = props.item.reviews.length === 0 ? 0 : props.item.reviews.reduce(reviews) / props.item.reviews.length

    return(
            <Card className="item-card">
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-qUdyTvpIG6w35K4hWPUkTeSyMIoUcaXGsTXqmfBK8bXWQqJf" alt="default image" wrapped ui={false}/>
                <Card.Content>
                    <Card.Header>{props.item.title}</Card.Header>
                    <Rating icon='star' defaultRating={!props.item.reviews.length ? 0 : props.item.reviews.length} maxRating={5} disabled/>
                </Card.Content>
                <Card.Content extra>
                    <p>Price:</p>
                    <b>${props.item.price}</b>
                </Card.Content>
            </Card>
    );
};

export default ItemCard;
