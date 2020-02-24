const initialState = [
    
]

const cartReducer = (state=initialState, action) => {
    switch(action.type){
        case "ADD_TO_CART":
            // console.log(action.cartItem)
            return action.cartItem

        default:
            return state;
    }
}

export default cartReducer;