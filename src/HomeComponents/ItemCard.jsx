import React from 'react';
import { Card, Image, Rating, Button } from 'semantic-ui-react'

const ItemCard = (props) => {

    // console.log(props.item)

    return(

            <Card>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-qUdyTvpIG6w35K4hWPUkTeSyMIoUcaXGsTXqmfBK8bXWQqJf" alt="default image" wrapped ui={false}/>
                <Card.Content>
                    <Card.Header>{props.item.title}</Card.Header>
                    <Rating icon='star' defaultRating={props.item.reviews.length} maxRating={4} />
                </Card.Content>
                <Card.Content extra>
                    <p>Price:</p>
                    <b>${props.item.price}</b>
                </Card.Content>
                <Button>Add to cart</Button>
            </Card>

    );
};

export default ItemCard;
