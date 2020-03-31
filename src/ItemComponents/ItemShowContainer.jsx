import React from 'react';
import { connect } from 'react-redux'
import InfoContainer from './InfoContainer'
import ReviewContainer from './ReviewContainer'
import NotFound from '../NotFound'

const ItemShowContainer = (props) => {

    let itemIds = props.items.map(item => item.id)
    

    return (
        <div>
            {itemIds.includes(parseInt(props.match.params.id)) ?
                <div>
                    <InfoContainer matchProps={props.match}/>
                    <hr className="item-info-review-separator"/>
                    <ReviewContainer matchProps={props.match}/>
                </div>
                :
                <div>
                    <NotFound />
                </div>
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        items: state.items.allItems
    }
}

export default connect(mapStateToProps)(ItemShowContainer);