import React from 'react';

import { Segment, Image, Button } from 'semantic-ui-react'

import { connect } from 'react-redux'

import { removeFromCart } from '../Actions/userActions'

const ItemInfoCard = (props) => {

    const removeItemFromCart = () => {
        let cart_joiner_id = props.cart_joiner

        fetch(`http://localhost:4000/cart_joiners/${cart_joiner_id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(deletedItem => {
            props.removeFromCart(deletedItem)
        })
    }

    // if the item already existe in cart increase quantity by one
    // else return the item
    // debugger
    // console.log(props.userCart.includes(props.item.id))

    const itemCartQuantity = () => {
        let duplicateItem = props.userCart.map(cartItem => cartItem.item.id === props.item.id)
        let uniqueItem = props.userCart.filter(cartItem => cartItem.item.id === props.item.id)[0].item
        if(props.userCart.includes(props.item)){
            return  <>
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-qUdyTvpIG6w35K4hWPUkTeSyMIoUcaXGsTXqmfBK8bXWQqJf" alt="default image"/>
                        <br/>
                        <p>{uniqueItem.title}</p>
                        <p>Price: ${uniqueItem.price}</p>
                        <p>Quantity: {duplicateItem.length}</p>
                    <Button size='small' onClick={removeItemFromCart}>Remove</Button>
                </>
        }else{
            return  <>
                        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-qUdyTvpIG6w35K4hWPUkTeSyMIoUcaXGsTXqmfBK8bXWQqJf" alt="default image"/>
                        <br/>
                        <p>{props.item.title}</p>
                        <p>Price: ${props.item.price}</p>
                        <p>Quantity: {duplicateItem.length}</p>
                        <Button size='small' onClick={removeItemFromCart}>Remove</Button>
                    </>
        }
    }

    return (
        <Segment>
            {itemCartQuantity()}
        </Segment>

    );

};

const mapStateToProps = (state) => {
    return{
        userCart: state.user.cart
    }
}

export default connect(mapStateToProps, { removeFromCart })(ItemInfoCard);