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

export const searchItems = (value) => {
    return{
        type: "SEARCH_ITEMS",
        value
    }
}

export const sortByPrice = (checkItems) => {
    return{
        type: "SORT_BY_PRICE",
        checkItems
    }
}