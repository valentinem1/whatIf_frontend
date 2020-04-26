// initialize the state here:
const initialState = {
    
}

const userReducer = (state=initialState, action) => {
    // switch statement allows to check for cases if cases are match the code will get executed if not the default case will execute.
    switch(action.type){
        // set the logged in user to the state to keep track of who's logged in.
        case "SET_USER":
            return {...state, ...action.newUser}
        // persit the logged in user to the state.
        case "PERSIST_USER":
            return {...state, ...action.persistedUser}
        // delete the user. reset the state to the old state will get rid of the deleted user.
        case "DELETE_USER":
            return {...state}
        // 
        case "ADD_TO_CART":
            // set the user cart. spread the cart and add the new item to it.
            return {...state, cart: [...state.cart, action.cartItem]}

        case "REMOVE_FROM_CART":
            // filter out the item from the cart. check if the any item id matches the id from the action. if not the item gets kicked out since there is no match.
            let newArr = state.cart.filter(item => item.id !== action.cartItem.cart_joiner.id)
            // reset the state by spreading the state and adding the new cart.
            return {...state, cart: newArr}

        // create and order. when the order gets created the cart gets cleared out cart: [] will clear cart with an empty array. the order is then added to the orders array by spreading the past orders and adding the new one from the action.
        case "CREATE_ORDER":
            return {...state, cart: [], orders: [...state.orders, action.newOrder]}

        // if no cases matchs the request it will return the original state.
        // always have a default case in switch statement!
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