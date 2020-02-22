export const fetchItems = (items) => {
    return {
        type: "FETCH ITEMS", 
        items
    }
}

export const addReview = (review) => {
    return {
        type: "ADD_REVIEW",
        review
    }
}