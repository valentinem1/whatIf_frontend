import React from 'react';

import InfoContainer from './InfoContainer'
import ReviewContainer from './ReviewContainer'

import { connect } from 'react-redux'
import { addToCart } from '../Actions/userActions'
import { decreaseItemQuantity } from '../Actions/itemsActions'

const ItemShowContainer = (props) => {
        
    return (
        <div>
            <InfoContainer matchProps={props.match}/>
            <ReviewContainer matchProps={props.match}/>
        </div>

    );
};

export default connect(null, { addToCart, decreaseItemQuantity })(ItemShowContainer);