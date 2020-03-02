const initialState = [
    
]

const itemReducer = (state=initialState, action) => {

    switch(action.type){

        case "FETCH_ITEMS":
            return action.items

        case "DECREASE_ITEM_QUANTITY":
            let updatedItem = state.map(item => item.id === action.item.id ? action.item : item)
            return updatedItem

        case "INCREASE_ITEM_QUANTITY":
            let newQuantity = state.map(item => item.id === action.item.id ? action.item : item)
            return newQuantity
        default:
            return state;
            
    }
}

export default itemReducer;