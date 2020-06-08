// initialize the state here:
const initialState = [
    
]

const reviewReducer = (state=initialState, action) => {
    // switch statement allows to check for cases if cases are match the code will get executed if not the default case will execute.
    switch(action.type){

        // set the state with all the reviews fetched from the back end.
        case "FETCH_ALL_REVIEWS":
            return action.allReviews

        // reset the state with the new review. spread the old state with the new review sent from the action.
        case "ADD_REVIEW":
            return [...state, action.newReview]

        // reset the state without the deleted review.
        case "DELETE_REVIEW":
            // by filtering the state, check if the review id from the action doesn't match any review from the state. By doing so the deleted review will get kicked out since it doesn't match.
            let newReviewArr = state.filter(review => review.id !== action.deletedReview.id)
            return newReviewArr
            
        // if no cases matchs the request it will return the original state.
        // always have a default case in switch statement!
        default:
            return state;
    }

}

export default reviewReducer;