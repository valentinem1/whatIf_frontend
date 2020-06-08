import React from 'react';

import ItemInfoCard from './ItemInfoCard'

import { connect } from 'react-redux'

const ItemInCartContainer = (props) => {
    // check if the user cart exist. React Async functionality.
    if(props.userCart){
        // mapping over the cart to display each item in the cart.
    let cartItem = props.userCart.map(cartItem => <ItemInfoCard key={cartItem.id} item={cartItem.item} cart_joiner_id={cartItem.id} cart_joiner_quantity={cartItem.quantity}/>)
    
        return (
            <div>
                {cartItem}
            </div>
        );
    }
    return null
};

// Any time the store is updated, mapStateToProps will be called. The results of mapStateToProps will be merged into the wrapped component’s props.
const mapStateToProps = (state) => {
    return{
        userCart: state.user.cart
    }
}

// connect, connects the component with redux to provide the piece of data needed from the store. The first argument of connect must be the function that merge the state to the component's props like mapStateToProps, since we are not dispatching any actions there is no second argument needed.
export default connect(mapStateToProps)(ItemInCartContainer);