import React from 'react';
import { connect } from 'react-redux'
import InfoContainer from './InfoContainer'
import ReviewContainer from './ReviewContainer'
import NotFound from '../NotFound'

const ItemShowContainer = (props) => {

    // maps over the items aray to collect the ids and return an array of item ids.
    let itemIds = props.items.map(item => item.id)
    

    return (
        <div>
            {/* check if the array of ids include the id from the dynamic url(params) 
                if yes display the item info card and its reviews
                if not display a not found page.
            */}
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

// Any time the store is updated, mapStateToProps will be called. The results of mapStateToProps will be merged into the wrapped component’s props.
const mapStateToProps = (state) => {
    return{
        items: state.items.allItems
    }
}

// connect, connects the component with redux to provide the piece of data needed from the store. The first argument of connect must be the function that merge the state to the component's props like mapStateToProps, second argument isn't required if no actions are needed.
export default connect(mapStateToProps)(ItemShowContainer);