import React from 'react';

import { connect } from 'react-redux'

const ItemInCartContainer = (props) => {

    console.log(props.cartItem)
    return (

        <div>
            
        </div>
    );

};

const mapStateToProps = (state) => {
    return {
        cartItem: state.cartItem
    }
}

export default connect(mapStateToProps)(ItemInCartContainer);