import React from 'react';
import { Image, Container, Button, Rating } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addToCart } from '../Actions/userActions'
import { decreaseItemQuantity } from '../Actions/itemsActions'

const InfoContainer = (props) => {
    
        const item_id = parseInt(props.matchProps.params.id)
        let item = props.items.find(item => item.id === item_id)

        const fetchToCart = () => {
            fetch('http://localhost:4000/cart_joiners', {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "Authorization": `bearer ${localStorage.token}`
                },
                body: JSON.stringify({
                    item_id
                })
            })
            .then(r => r.json())
            .then(cartItem => {
                props.addToCart(cartItem)
                props.decreaseItemQuantity(cartItem.item)
            })
        }

    if(props.items.length){
            let ratingArr = item.reviews.map(review => review.rating)
            let sumRatingArr = ratingArr.length === 0 ? 0 : ratingArr.reduce((total, num) => total + num)
            let averageRating = sumRatingArr === 0 ? 0 : sumRatingArr / ratingArr.length

        return (
            <div className="item-info-card">
                <Container>
                    <div className="item-image-description-block">
                        <Image className="item-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-qUdyTvpIG6w35K4hWPUkTeSyMIoUcaXGsTXqmfBK8bXWQqJf" alt="default image"/>
                        <div className="item-info">
                            <h1 className="item-title-header">{item.title}</h1>
                            <div className="average-rating-on-item">
                                <Rating icon='star' defaultRating={averageRating} maxRating={5} disabled/> ({ratingArr.length})
                            </div>
                            <p className="item-description">{item.description}</p>
                            <p className="item-price">Price: ${item.price}</p>
                            <p className="item-quantity-left">Quantity: {item.quantity} left</p>
                            <br/>
                            {item.quantity < 1 ? <Button disabled className="add-to-cart-btn">Sold out</Button> : <Button className="add-to-cart-btn" onClick={fetchToCart}>Add to cart</Button>}
                        </div>
                    </div>
                </Container>
            </div>
            )
        }return null
    }

const mapStateToProps = (state) => {
    return{
        items: state.items
    }
}

export default connect(mapStateToProps, { addToCart, decreaseItemQuantity })(InfoContainer);