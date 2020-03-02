export const fetchReviews = (allReviews) => {
    // console.log(allReviews)
    return{
        type: "FETCH_ALL_REVIEWS",
        allReviews
    }
}

export const addReview = (newReview) => {
    return{
        type: "ADD_REVIEW",
        newReview
    }
}

export const destroyReview = (deletedReview) => {
    return{
        type: "DELETE_REVIEW",
        deletedReview
    }
}


