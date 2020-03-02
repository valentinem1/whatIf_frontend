export const fetchItems = (items) => {
    return {
        type: "FETCH_ITEMS", 
        items
    }
}

export const decreaseItemQuantity = (item) => {
    // console.log(item)
    return{
        type: "DECREASE_ITEM_QUANTITY",
        item
    }
}

export const increaseItemQuantity = (item) => {
    // console.log(item)
    return{
        type: "INCREASE_ITEM_QUANTITY",
        item
    }
}