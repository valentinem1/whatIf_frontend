import React from 'react';
import { Card, Image, Rating, Header, Dimmer, Loader } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { searchItems } from '../Actions/itemsActions'

const ItemCard = (props) => {
    // This function allows to slice the item title to only a certain length.
    const itemTitle = () => {
        // check if the item exist. this checking handles the asynchronous functionality of react.
        if(props.item){
            // slices the title to a length of 35 characters.
            return <> {props.item.title.slice(0, 35)}{props.item.title.length > 30 ? "..." : null } </>
        }else{
            // if doesn't exist returns null.
            return null
        }
    }

    // mapping over the reviews array to only collect the rating. this function will return an array of ratings.
        let ratingArr = !props.item ? null : props.item.reviews.map(review => review.rating)
    // once we got the array of ratings we check if there is any ratings by checking if its length equal to 0.  If not we sum up the array to a number of ratings using the reduce method.
    let sumRatingArr = !ratingArr ? 0 : ratingArr.reduce((total, num) => total + num)
    // once the we got the sum of the ratings it get divided by the array ratings' length to get the average of rating for the item.
    let averageRating = sumRatingArr === 0 ? 0 : sumRatingArr / ratingArr.length

    // gets triggered once clicking on an item card. 
    const clearSearch = () => {
        // set the search value to an empty string to the state by calling the searchItems action which will trigger the store to call the reducer to change the state.
        // It allos to clear the state to an empty string so if the customer goes back to the home page it will show all the items and not only the one that has been searched.
        props.searchItems("")
    }

    return(
            <div>
                {/* check if the item exist. If it doesn't disable the link to the show page. */}
                <Link onClick={!props.item ? (event) => {event.preventDefault()} : props.searchItems("")} to={!props.item ? "" : `/${props.item.id}`}>
                    {
                        !props.item ? 
                            <Card className="item-card">
                                <Dimmer active inverted>
                                    <Loader inverted>Loading</Loader>
                                </Dimmer>
                            </Card>
                            :
                            <Card className="item-card">
                            <Image src={props.item.image} alt="default image" wrapped ui={false}/>
                            <Card.Content className="item-card-content">
                            <Header>{itemTitle()}</Header>
                                <Rating icon='star' defaultRating={averageRating} maxRating={5} disabled/>
                                <h4 className="item-card-price-header">Price:</h4>
                                <p className="item-card-price">${props.item.price}</p>
                            </Card.Content>
                            </Card>
                    }
                </Link>
            </div>
    );
};

const mapStateToProps = (state) => {
    return {
        searchItem: state.items.search
    }
}

export default connect(null, { searchItems })(ItemCard);