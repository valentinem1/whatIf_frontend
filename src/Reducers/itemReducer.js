const initialState = {
    allItems: [],
    sortValue: "All", 
    checkAll: false,
    checkLow: false,
    checkHigh: false,
    search: ""
}

const itemReducer = (state=initialState, action) => {

    switch(action.type){

        case "FETCH_ITEMS":
            return {...state, allItems: action.items}

        case "DECREASE_ITEM_QUANTITY":
            let updatedItem = state.allItems.map(item => item.id === action.item.id ? action.item : item)
            return {...state, allItems: updatedItem}

        case "INCREASE_ITEM_QUANTITY":
            let newQuantity = state.allItems.map(item => item.id === action.item.id ? action.item : item)
            return {...state, allItems: newQuantity}

        case "SORT_ALL_PRICE":
            return {...state, sortValue: action.checkItems, checkAll: !state.checkAll}

        case "SORT_LOW_PRICE":
            return {...state, sortValue: action.checkItems, checkLow: !state.checkLow}

        case "SORT_HIGH_PRICE":
            return {...state, sortValue: action.checkItems, checkHigh: !state.checkHigh}

        case "SEARCH_ITEMS":
            return {...state, search: action.value}
        default:
            return state;
    }
}

export default itemReducer;