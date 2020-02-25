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
            return {...state, cart: [...state.cart, action.cartItem]}

        case "REMOVE_FROM_CART":

            let newArr = state.cart.filter(item => item.id !== action.cartItem.cart_joiner.id)
            return {...state, cart: newArr}
            
        default:
            return state;
    }
}

export default userReducer;