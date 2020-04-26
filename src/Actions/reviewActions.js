// creates actions which gets called in components when needed. These actions when called get checked in the reduce which check for cases that matches the action type to execute the change of the state. The parameter of the action is the argument given when invoked ex: after a promise get return from a fetch to send some informations to change the state.

export const fetchReviews = (allReviews) => {
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


