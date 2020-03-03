import React from 'react';

import InfoContainer from './InfoContainer'
import ReviewContainer from './ReviewContainer'

const ItemShowContainer = (props) => {
        // console.log(props.match)
    return (
        <div>
            <InfoContainer matchProps={props.match}/>
            <hr className="item-info-review-separator"/>
            <ReviewContainer matchProps={props.match}/>
        </div>

    );
};

export default ItemShowContainer;