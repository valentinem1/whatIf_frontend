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

export const sortAllPrice = (checkItems) => {
    return{
        type: "SORT_ALL_PRICE",
        checkItems
    }
} 

export const sortLowPrice = (checkItems) => {
    return{
        type: "SORT_LOW_PRICE",
        checkItems
    }
} 

export const sortHighPrice = (checkItems) => {
    return{
        type: "SORT_HIGH_PRICE",
        checkItems
    }
}