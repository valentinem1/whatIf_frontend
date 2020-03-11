const initialState = {
    allItems: [],
    highPrice: false,
    lowPrice: false,
    search: ""
}

const itemReducer = (state=initialState, action) => {

    switch(action.type){

        case "FETCH_ITEMS":
            return {...state, allItems: action.items}

        case "DECREASE_ITEM_QUANTITY":
            let updatedItem = state.map(item => item.id === action.item.id ? action.item : item)
            return updatedItem

        case "INCREASE_ITEM_QUANTITY":
            let newQuantity = state.map(item => item.id === action.item.id ? action.item : item)
            return newQuantity

        case "SORT_BY_HIGH_PRICE":
            return {...state, ...state.allItems, highPrice: action.checkItems}

        case "SEARCH_ITEMS":
            return {...state, search: action.value}
        default:
            return state;
    }
}

export default itemReducer;