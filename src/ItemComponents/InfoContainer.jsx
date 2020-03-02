import React from 'react';

import { Image, Header, Container, Icon, Label, Button } from 'semantic-ui-react'

import { connect } from 'react-redux'

const InfoContainer = (props) => {
    
        const item_id = parseInt(props.matchProps.params.id)
        let item = props.items.find(item => item.id === item_id)

        const addToCart = () =>{
            // let item_id = parseInt(props.matchProps.params.id)
    
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
                // console.log(cartItem)
                props.addToCart(cartItem)
                props.decreaseItemQuantity(cartItem.item)
            })
        }
        // console.log(props)
        if(item){
            return (
                <div>
                    <Container>
                        <Header>{item.title}</Header>
                        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-qUdyTvpIG6w35K4hWPUkTeSyMIoUcaXGsTXqmfBK8bXWQqJf" alt="default image"/>
                        <p>{item.description}</p>
                        <Label>
                            <Icon>Quantity: {item.quantity}</Icon>
                        </Label>
                        <Label>
                            <Icon>Price: ${item.price}</Icon>
                        </Label>
                        <br/>
                        {item.quantity < 1 ? <Button disabled className="add-to-cart-btn" onClick={addToCart}>Sold out</Button> : <Button className="add-to-cart-btn" onClick={addToCart}>Add to cart</Button>}
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

export default connect(mapStateToProps)(InfoContainer);











// functional component can't get item info due to state being async

// import React from 'react';
// import {useParams} from 'react-router-dom'
// import { connect } from 'react-redux'

// const InfoContainer = (props) => {
    //     const paramsId = useParams()

    //     const item = props.items.find((item) => {
        //         return item.id === parseInt(paramsId.id)
        //     })
//     // console.log(props.items)
//     console.log(item)
//     return (

//         <div>
//             
//         </div>

//     );
// };

// const mapStateToProps = (state) => {
//     return {
//         items: state.items
//     }
// }