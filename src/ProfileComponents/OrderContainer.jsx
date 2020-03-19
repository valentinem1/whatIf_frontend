import React from 'react';
import OrderCard from './OrderCard'
import { connect } from 'react-redux'

const OrderContainer = (props) => {
    if(props.orders){
        let orders = props.orders.reverse().map(order => <OrderCard key={order.order_id} order={order} pathname={props.pathname}/>)
        return (
            <div>
                <h1 className="order-header">Purchased:</h1>
                {orders}
            </div>
        );
    } return null

};

const mapStateToProps = (state) => {
    return{
        orders: state.user.orders
    }
}

export default connect(mapStateToProps)(OrderContainer);