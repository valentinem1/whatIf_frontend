export const fetchItems = (items) => {
    return {
        type: "FETCH ITEMS", 
        items
    }
}

export const decreaseItemQuantity = (item) => {
    return{
        type: "DECREASE_ITEM_QUANTITY",
        item
    }
}