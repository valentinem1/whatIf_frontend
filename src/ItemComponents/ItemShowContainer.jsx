import React from 'react';

import InfoContainer from './InfoContainer'
import ReviewContainer from './ReviewContainer'

const ItemShowContainer = (props) => {
// console.log(props)
    return (
        <div>
            <InfoContainer matchProps={props.match}/>
            <ReviewContainer />
        </div>

    );
};

export default ItemShowContainer;