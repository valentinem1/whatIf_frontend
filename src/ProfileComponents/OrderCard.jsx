import React from 'react';
import ItemInfoCard from '../CartComponents/ItemInfoCard'

const OrderCard = (props) => {
    console.log(props.order.created_at)
    if(props.order.created_at){
            let orderItem = props.order.items === undefined ? null : props.order.items.map(orderItem => <ItemInfoCard key={orderItem.id} item={orderItem} pathname={props.pathname}/>)
            return (
                <div>
                    <h5 className="purchased-time">Purchased on {props.order.created_at}:</h5>
                    {orderItem} 
                </div>
            )
    }return null
};

export default OrderCard;