const initialState = {

}

const userReducer = (state=initialState, action) => {
    // console.log(state)
    switch(action.type){

        case "SET_USER":
            return action.newUser

        case "PERSIST_USER":
            return action.persistedUser

        case "ADD_TO_CART":
            let found_item = state.cart.find(cartItem => cartItem.item.id === action.cartItem.item.id)
            
            if(found_item){
                let newArr = state.cart.map(cartItem => {
                    if(cartItem.id === action.cartItem.item.id){
                        const newObj = {
                            ...action.cartItem.item
                        }
                        return newObj
                    }
                    return cartItem
                })
                return {...state, cart: newArr}
            }
            else{
                return {...state, cart: [...state.cart, action.cartItem]}
            }

        case "REMOVE_FROM_CART":
            // console.log(action.cartItem)
            let newArr = state.cart.filter(item => item.id !== action.cartItem.cart_joiner.item_id)
            return {...state, cart: newArr}
            
        default:
            return state;
    }
}

export default userReducer;