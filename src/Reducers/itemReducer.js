const initialState = [
    
]

const itemReducer = (state=initialState, action) => {

    switch(action.type){

        case "FETCH ITEMS":
            return action.items

        default:
            return state;
            
    }
}

export default itemReducer;