export const fetchItems = (items) => {
    return {
        type: "FETCH_ITEMS", 
        items
    }
}

export const decreaseItemQuantity = (item) => {
    return{
        type: "DECREASE_ITEM_QUANTITY",
        item
    }
}

export const increaseItemQuantity = (item) => {
    return{
        type: "INCREASE_ITEM_QUANTITY",
        item
    }
}

export const sortByHighPrice = (checkItems) => {
    console.log("from action:", checkItems)
    return{
        type: "SORT_BY_HIGH_PRICE", 
        checkItems
    }
}

export const sortByLowPrice = (checkItems) => {
    return{
        type: "SORT_BY_LOW_PRICE",
        checkItems
    }
}

export const searchItems = (value) => {
    return{
        type: "SEARCH_ITEMS",
        value
    }
}