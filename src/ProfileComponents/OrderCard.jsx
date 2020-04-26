import React from 'react';
import ItemInfoCard from '../CartComponents/ItemInfoCard'

const OrderCard = (props) => {
    // check if the order created_at attribute exist to then display it.
    if(props.order.created_at){
            // checkin if the items in the order exist by checking if it is undefined. If not mapping over the array of items to display their information. Reusing the ItemInfoCard component since in both the order and the cart the item need to display a card of information.
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