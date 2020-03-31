import React from 'react';
import { Card, Image, Rating, Header } from 'semantic-ui-react'

const ItemCard = (props) => {


    const itemTitle = () => {
        if(props.item){
           return <> {props.item.title.slice(0, 35)}{props.item.title.length > 30 ? "..." : null } </>
        }else{
            return null
        }
    }


    if(props.item.reviews){
            let ratingArr = props.item.reviews.map(review => review.rating)
            let sumRatingArr = ratingArr.length === 0 ? 0 : ratingArr.reduce((total, num) => total + num)
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