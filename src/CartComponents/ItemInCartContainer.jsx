import React from 'react';

import ItemInfoCard from './ItemInfoCard'

import { connect } from 'react-redux'

const ItemInCartContainer = (props) => {

    if(props.userCart){
        let cartItem = props.userCart.map(item => <ItemInfoCard key={item.id} item={item} />)

        return (
            <div>
                {cartItem}
            </div>
        );
    }
    return null

};

const mapStateToProps = (state) => {
    return{
        userCart: state.user.cart
    }
}

export default connect(mapStateToProps)(ItemInCartContainer);