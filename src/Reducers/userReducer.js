const initialState = {
    
}

const userReducer = (state=initialState, action) => {
    switch(action.type){

        case "SET_USER":
            return {...state, ...action.newUser}

        case "PERSIST_USER":
            return {...state, ...action.persistedUser}

        case "DELETE_USER":
            return {...state}

        case "ADD_TO_CART":
            console.log("state:", state.cart)
            return {...state, cart: [...state.cart, action.cartItem]}

        case "REMOVE_FROM_CART":
            let newArr = state.cart.filter(item => item.id !== action.cartItem.cart_joiner.id)
            return {...state, cart: newArr}

        case "CREATE_ORDER":
            console.log("state:", state.orders)
            console.log("action:", action.newOrder)
            return {...state, cart: [], orders: [...state.orders, action.newOrder]}

        default:
            return state;
    }
}

export default userReducer;















// let found_added_item = !state.cart ? null : state.cart.map(cartItem => cartItem.item.id).includes(action.cartItem.item.id)
            // if(found_added_item){
            //     let newArr = state.cart.map(cartItem => {
            //                 if(cartItem.item.id === action.cartItem.item.id){
            //                     const newObj = {
            //                         ...action.cartItem.item
            //                     }
            //                     return newObj
            //                 }
            //                 return cartItem
            //             })
            //             return {...state, cart: newArr}
                
            // }else{