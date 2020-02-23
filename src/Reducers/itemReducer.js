const initialState = [
    
]

const itemReducer = (state=initialState, action) => {

    switch(action.type){

        case "FETCH ITEMS":
            return action.items

        // case "ADD_REVIEW":
        //     return action.review
            
        default:
            return state;
            
    }
}

export default itemReducer;