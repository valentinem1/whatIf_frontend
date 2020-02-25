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
            // console.log(action.cartItem)
            // change to add the whole cart_joiner to the state. This will change the way of how I have to  iterate through the cart in ItemInCartContainer.jsx
            return {...state, cart: [...state.cart, action.cartItem.item]}

        default:
            return state;
    }
}

export default userReducer;