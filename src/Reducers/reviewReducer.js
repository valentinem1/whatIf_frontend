const initialState = [
    
]

const reviewReducer = (state=initialState, action) => {

    switch(action.type){
        case "FETCH_ALL_REVIEWS":
            return action.allReviews

        case "ADD_REVIEW":
            return [...state, action.newReview]

        case "DELETE_REVIEW":
            let newReviewArr = state.filter(review => review.id !== action.deletedReview.id)
            return newReviewArr

        default:
        return state;
        
    }

}

export default reviewReducer;