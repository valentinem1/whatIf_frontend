import React from 'react';

import ItemInfoCard from './ItemInfoCard'

import { connect } from 'react-redux'

const ItemInCartContainer = (props) => {
    // debugger
    // console.log(props.items)

    if(props.userCart){
        let cartItem = props.userCart.map(item => <ItemInfoCard key={item.id} item={item} cart={props.userCart}/>)

        return (
            <div>
                {cartItem}
            </div>
        );
    }
    return null

};

const mapStateToProps = (state) => {
    // console.log(state)
    return{
        items: state.items,
        userCart: state.user.cart
    }
}

export default connect(mapStateToProps)(ItemInCartContainer);