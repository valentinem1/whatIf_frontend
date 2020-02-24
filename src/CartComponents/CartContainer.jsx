import React from 'react';

import ItemInCartContainer from './ItemInCartContainer'
import CheckoutCardContainer from './CheckoutCard'

const CartContainer = (props) => {

    return (

        <div>
            <ItemInCartContainer />
            <CheckoutCardContainer />
        </div>
    );

};

export default CartContainer;