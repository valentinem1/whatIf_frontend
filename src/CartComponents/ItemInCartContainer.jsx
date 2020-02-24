import React, { Component } from 'react';

class ItemInCartContainer extends Component {

    state={

    }

    componentDidMount() {
        fetch('http://localhost:4000/persist',{
            headers:{
                "Authorization": `bearer ${localStorage.token}`
            }
        })
        .then(r => r.json())
        .then(userData => {
            this.setState({
                ...userData
            })
        })
    }
    

    render() {
        // debugger
        console.log(this.state)
        return (
            <div>
                
            </div>
        );
    }

}

export default ItemInCartContainer;