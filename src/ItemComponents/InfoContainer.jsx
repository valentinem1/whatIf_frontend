import React, { Component } from 'react';

import { Image, Header, Container, Icon, Label } from 'semantic-ui-react'

import { connect } from 'react-redux'

class InfoContainer extends Component {
    
    render() {
        const item_id = parseInt(this.props.matchProps.params.id)
        let item = this.props.items.find(item => item.id === item_id)

        // console.log(item)
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
                </Container>
            </div>
        );
        }
        return null
    }
    
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