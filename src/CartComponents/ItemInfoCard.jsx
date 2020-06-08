import React from 'react';
import { Segment, Image, Button, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import { removeFromCart } from '../Actions/userActions'
import { increaseItemQuantity } from '../Actions/itemsActions'

const ItemInfoCard = (props) => {

    // get called when clicking remove from cart button.
    const removeItemFromCart = () => {
        // pass the cat_joiner_id in the url to delete the item clicked on.
        fetch(`https://watif-api.herokuapp.com/cart_joiners/${props.cart_joiner_id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(deletedItem => {
            // deleted item get sent back
            // add the new item quantity sent back from the back end to the state by calling the increaseQuantity action which will trigger the store to call the reducer to change the state. Pass it the item with the new quantity updated in the back end as argument.
            props.increaseItemQuantity(deletedItem.item)
            // send the deleted cart_joiner to the state by calling the removeFromCart action which will trigger the store to call the reducer to change the state. Pass it the deleted item as argument.
            props.removeFromCart(deletedItem)
        })
    }

    if(props.item){
        // reuse the component to show items in cart on the cart page and item ordered on the profile page.
        return (
            <>
            {props.pathname === "/profile" ? 
            <Container className="order-card-container">
            <Segment className="order-segment">
                <div className="order-cart-item-container">
                    <Image className="order-item-image" src={props.item.image} alt="default image"/>
                    <div className="order-item-info">
                        <Link to={`/${props.item.id}`}><h3 className="order-item-title">{props.item.title}</h3></Link>
                        <p className="order-item-price">Price: ${props.item.price}</p>
                    </div>
                </div>
                
            </Segment>
            </Container> 
                : 
            <Segment className="item-order-card">
                <div className="order-cart-item-container">
                    <Image className="cart-item-image" src={props.item.image} alt="default image"/>
                    <div className="cart-item-info">
                        <Link to={`/${props.item.id}`}><h3 className="order-item-title">{props.item.title}</h3></Link>
                        <p className="cart-item-price">Price: ${props.item.price}</p>
                        <Button className="remove-from-cart-btn" size='small' onClick={removeItemFromCart}>Remove</Button>
                    </div>
                </div>
            </Segment>}
            </>
        );
    }
    return null

};

// Any time the store is updated, mapStateToProps will be called. The results of mapStateToProps will be merged into the wrapped component’s props.
const mapStateToProps = (state) => {
    return{
        userCart: state.user.cart
    }
}

// connect, connects the component with redux to provide the piece of data needed from the store. The first argument of connect must be the function that merge the state to the component's props like mapStateToProps, second argument like { removeFromCart, increaseItemQuantity } an ES6 destructuring feature must be the function(s) that dispatches the actions to the store.
export default connect(mapStateToProps, { removeFromCart, increaseItemQuantity })(ItemInfoCard);