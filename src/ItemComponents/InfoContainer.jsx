import React from 'react';
import { Image, Container, Button, Rating } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addToCart } from '../Actions/userActions'
import { decreaseItemQuantity } from '../Actions/itemsActions'

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const InfoContainer = (props) => {
    // parse the id from the dynamic url(params) to be an integer.
    const item_id = parseInt(props.matchProps.params.id)
    // find the item from the url that matches the item in the store to display all its information on its show page
    let item = props.items ? props.items.find(item => item.id === item_id) : null
    
    // fetches item to the cart once clicking on add to cart button
    const fetchToCart = () => {
        fetch('https://watif-api.herokuapp.com/cart_joiners', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                // send the token to assure that the item(s) are added to the logged in user cart.
                "Authorization": `bearer ${localStorage.token}`
            },
            body: JSON.stringify({
                item_id
            })
        })
        .then(r => r.json())
        .then(cartItem => {
            // cart_joiner instance get sent back
            // add the cart_joiner instance to the state by calling the addToCart action which will trigger the store to call the reducer to change the state. Pass it the instance of the cart_joiner as argument.
            props.addToCart(cartItem)
            // add the new item quantity sent back from the back end to the state by calling the decreaseItemQuantity action which will trigger the store to call the reducer to change the state. Pass it the item with the new quantity updated in the back end as argument.
            props.decreaseItemQuantity(cartItem.item)
        })
    }

    // check if the item exist. handles the asychronous functionality of react.
    if(item){
        // calculating the average rating for each item
        const averageRating = () => {
            // check if the array of review is empty
            // if yes return 0
            if(item.reviews === undefined){
                return 0
            }else{
                // mapping over the reviews array to only collect the rating. this function will return an array of ratings.
                let ratingArr = item.reviews.map(review => review.rating)
                // once we got the array of ratings we check if there is any ratings by checking if its length equal to 0. If not we sum up the array to a number of ratings using the reduce method.
                let sumRatingArr = ratingArr.length === 0 ? 0 : ratingArr.reduce((total, num) => total + num)
                // once the we got the sum of the ratings it get divided by the array ratings' length to get the average of rating for the item.
                let average = sumRatingArr === 0 ? 0 : sumRatingArr / ratingArr.length
                return average
            }
        }

        // calculates the number of ratings of an item
        const ratingArray = () => {
            // check if the array of reviews is empty
            // if yes return 0
            if(item.reviews === undefined){
                return 0
            }else{
                // mapping over the array of reviews to collect the ratings.
                let ratingArr = item.reviews.map(review => review.rating)
                // calling the .length method on the array of ratings to know how many reviews there is for the item.
                return ratingArr.length
            }
        }
        
        return (
            <div className="item-info-card">
                <Container>
                    <div className="item-image-description-block">
                        {/* npm package that allows to zoom on image on click. */}
                        <Zoom className="zoom-image">
                            <Image className="item-image" src={item.image} alt="default image"/>
                        </Zoom>
                        <div className="item-info">
                            <h1 className="item-title-header">{item.title}</h1>
                            <div className="average-rating-on-item">
                                <Rating icon='star' defaultRating={averageRating()} maxRating={5} disabled/> ({ratingArray()})
                            </div>
                            {/* slice the description of the item to a length of 916 characters if the length is bigger than 1000 */}
                            <p className="item-description">{item.description.length > 1000 ? item.description.slice(0, 916) : item.description}</p>
                            <p className="item-price">Price: ${item.price}</p>
                            <p className="item-quantity-left">Quantity: {item.quantity} left</p>
                            <br/>
                            {item.quantity < 1 ? <Button disabled className="add-to-cart-btn">Sold out</Button> : <Button className="add-to-cart-btn" disabled={localStorage.token ? false : true}onClick={fetchToCart}>Add to cart</Button>}
                        </div>
                    </div>
                </Container>
            </div>
            )
        }return null
    }

// Any time the store is updated, mapStateToProps will be called. The results of mapStateToProps will be merged into the wrapped component’s props.
const mapStateToProps = (state) => {
    return{
        items: state.items.allItems,
        userCart: state.user.cart
    }
}

// connect, connects the component with redux to provide the piece of data needed from the store. The first argument of connect must be the function that merge the state to the component's props like mapStateToProps otherwise null if this function isn't needed, second argument like { addToCart, decreaseItemQuantity } an ES6 destructuring feature must be the function(s) that dispatches the actions to the store.
export default connect(mapStateToProps, { addToCart, decreaseItemQuantity })(InfoContainer);