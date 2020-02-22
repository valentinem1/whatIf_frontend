import React, { Component } from 'react';

import { Image, Header, Container, Icon, Label } from 'semantic-ui-react'

class InfoContainer extends Component {
    
    state = {

    }
    componentDidMount() {
        const item_id = this.props.matchProps.params.id

        fetch(`http://localhost:4000/items/${item_id}`)
        .then(r => r.json())
        .then(itemData => {
            this.setState({
                ...itemData
            })
        })
    }
    
    render() {
        // console.log(this.state)
        return (
            <div>
                <Container>
                    <Header>{this.state.title}</Header>
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-qUdyTvpIG6w35K4hWPUkTeSyMIoUcaXGsTXqmfBK8bXWQqJf" alt="default image"/>
                
                    <p>
                        {this.state.description}
                    </p>
                    <Label>
                        <Icon>Quantity: {this.state.quantity}</Icon>
                    </Label>
                    <Label>
                        <Icon>Price: ${this.state.price}</Icon>
                    </Label>
                </Container>
            </div>
        );
    }
    
}

export default InfoContainer;











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