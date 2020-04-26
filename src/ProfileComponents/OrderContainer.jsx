import React from 'react';
import OrderCard from './OrderCard'
import { connect } from 'react-redux'

const OrderContainer = (props) => {
    // check if the orders exist to display it.
    if(props.orders){
        // reverse the order of the order array to get the latest one at the top. Then mapping over the array to display the order.
        let orders = props.orders.reverse().map(order => <OrderCard key={order.order_id} order={order} pathname={props.pathname}/>)
        return (
            <div>
                <h1 className="order-header">Purchased:</h1>
                {orders}
            </div>
        );
    } return null

};

// Any time the store is updated, mapStateToProps will be called. The results of mapStateToProps will be merged into the wrapped component’s props.
const mapStateToProps = (state) => {
    return{
        orders: state.user.orders
    }
}

// connect, connects the component with redux to provide the piece of data needed from the store. The first argument of connect must be the function that merge the state to the component's props like mapStateToProps. Since we're not dispatching any actions, the second argument isn't needed.
export default connect(mapStateToProps)(OrderContainer);