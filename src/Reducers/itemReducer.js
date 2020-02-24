const initialState = [
    
]

const itemReducer = (state=initialState, action) => {

    switch(action.type){

        case "FETCH ITEMS":
            return action.items

        case "DECREASE_ITEM_QUANTITY":
            // debugger
            // let newQuantity = action.item.quantity - 1
            let updatedItem = state.map(item => item.id === action.item.id ? action.item : item)
            // console.log(updatedItem)
            return updatedItem

        default:
            return state;
            
    }
}

export default itemReducer;