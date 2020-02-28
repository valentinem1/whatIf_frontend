import React from 'react';
import OrderCard from './OrderCard'
import { connect } from 'react-redux'

const OrderContainer = (props) => {

    if(props.orders){
        let orders = props.orders.map(order => <OrderCard order={order} pathname={props.match.path}/>)
        return (
            <div>
                 Orders:
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