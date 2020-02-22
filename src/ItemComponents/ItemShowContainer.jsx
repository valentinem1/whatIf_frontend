import React from 'react';

import InfoContainer from './InfoContainer'
import ReviewContainer from './ReviewContainer'

const ItemShowContainer = (props) => {
// console.log(props)
    return (
        <div>
            <InfoContainer matchProps={props.match}/>
            <ReviewContainer matchProps={props.match}/>
        </div>

    );
};

export default ItemShowContainer;