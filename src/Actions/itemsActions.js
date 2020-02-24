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

// export const addReview = (review) => {
//     return {
//         type: "ADD_REVIEW",
//         review
//     }
// }