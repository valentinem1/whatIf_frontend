import React from 'react';

import { Segment, Image } from 'semantic-ui-react'

const ItemInfoCard = (props) => {

    return (

        <Segment>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-qUdyTvpIG6w35K4hWPUkTeSyMIoUcaXGsTXqmfBK8bXWQqJf" alt="default image"/>
                <br/>
                <p>{props.item.title}</p>
                <p>Price: ${props.item.price}</p>
        </Segment>
        
    );

};

export default ItemInfoCard;