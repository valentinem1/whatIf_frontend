// state initialized here:
const initialState = {
    allItems: [],
    sortValue: "All",
    search: ""
}

const itemReducer = (state=initialState, action) => {
    // switch statement allows to check for cases if cases are match the code will get executed if not the default case will execute.
    switch(action.type){
        // set the state with all the items fetched from the back end.
        case "FETCH_ITEMS":
            return {...state, allItems: action.items}
        // reset the item quantity back down.
        case "DECREASE_ITEM_QUANTITY":
            // mapping through the array of items if the item id equals the id from the item sent from the action matches. if yes reassigns the item to the one from the action otherwise set it to the item.
            let updatedItem = state.allItems.map(item => item.id === action.item.id ? action.item : item)
            return {...state, allItems: updatedItem}
        // rest the item quantity back up.
        case "INCREASE_ITEM_QUANTITY":
            // mapping through the array of items if the item id equals the id from the item sent from the action matches. if yes reassigns the item to the one from the action otherwise set it to the item.
            let newQuantity = state.allItems.map(item => item.id === action.item.id ? action.item : item)
            return {...state, allItems: newQuantity}
        // set the state to the value of the sort button that got clicked on. 
        // ex: if the value was highPrice the state will change to highPrice which will display the item from high to low.
        case "SORT_BY_PRICE":
            return {...state, sortValue: action.checkItems}
        // set the state search value to whatever has been typed in the search bar.
        case "SEARCH_ITEMS":
            return {...state, search: action.value}
        // if no cases matchs the request it will return the original state.
        // always have a default case in switch statement!
        default:
            return state;
    }
}

export default itemReducer;