import React from 'react';
import ItemInfoCard from '../CartComponents/ItemInfoCard'

const OrderCard = (props) => {

    if(props.order){
        let orderItem = props.order.items.map(orderItem => <ItemInfoCard key={orderItem.id} item={orderItem} pathname={props.pathname}/>)
        return (
            <div>
                Purchased on {props.order.created_at.slice(0, 10)}:
               {orderItem} 
            </div>
        );
    } return null
};

export default OrderCard;