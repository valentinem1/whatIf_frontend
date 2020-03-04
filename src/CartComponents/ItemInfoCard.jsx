import React from 'react';
import { Segment, Image, Button, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import { removeFromCart } from '../Actions/userActions'
import { increaseItemQuantity } from '../Actions/itemsActions'

const ItemInfoCard = (props) => {

    const removeItemFromCart = () => {
        let cart_joiner_id = props.cart_joiner

        fetch(`http://localhost:4000/cart_joiners/${cart_joiner_id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(deletedItem => {
            props.increaseItemQuantity(deletedItem.item)
            props.removeFromCart(deletedItem)
        })
    }

    if(props.item){
        return (
            <>
            {props.pathname === "/orders" ? 
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
                        {/* <p>Quantity: {props.cart_joiner_quantity}</p> */}
                        <Button className="remove-from-cart-btn" size='small' onClick={removeItemFromCart}>Remove</Button>
                    </div>
                </div>
            </Segment>}
            </>
        );
    }
    return null

};

const mapStateToProps = (state) => {
    return{
        userCart: state.user.cart
    }
}

export default connect(mapStateToProps, { removeFromCart, increaseItemQuantity })(ItemInfoCard);