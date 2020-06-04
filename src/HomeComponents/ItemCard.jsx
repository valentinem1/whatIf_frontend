import React from 'react';
import { Card, Image, Rating, Header } from 'semantic-ui-react'

const ItemCard = (props) => {
    // This function allows to slice the item title to only a certain length.
    const itemTitle = () => {
        // check if the item exist. this checking handles the asynchronous functionality of react.
        if(props.item){
            // slices the title to a length of 35 characters.
            return <> {props.item.title.slice(0, 35)}{props.item.title.length > 30 ? "..." : null } </>
        }else{
            // if doesn't exist returns null.
            return null
        }
    }

    // check if the reviews exist. handles the asychronous functionality of react.
    if(props.item.reviews){
            // mapping over the reviews array to only collect the rating. this function will return an array of ratings.
            let ratingArr = props.item.reviews.map(review => review.rating)
            // once we got the array of ratings we check if there is any ratings by checking if its length equal to 0.  If not we sum up the array to a number of ratings using the reduce method.
            let sumRatingArr = ratingArr.length === 0 ? 0 : ratingArr.reduce((total, num) => total + num)
            // once the we got the sum of the ratings it get divided by the array ratings' length to get the average of rating for the item.
            let averageRating = sumRatingArr === 0 ? 0 : sumRatingArr / ratingArr.length

        return(
                <Card className="item-card">
                    <Image src={props.item.image} alt="default image" wrapped ui={false}/>
                    <Card.Content className="item-card-content">
                    <Header>{itemTitle()}</Header>
                        <Rating icon='star' defaultRating={averageRating} maxRating={5} disabled/>
                        <h4 className="item-card-price-header">Price:</h4>
                        <p className="item-card-price">${props.item.price}</p>
                    </Card.Content>
                </Card>
        );
    }return null
};

export default ItemCard;