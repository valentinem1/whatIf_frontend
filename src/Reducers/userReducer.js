const initialState = {

}

const userReducer = (state=initialState, action) => {

    switch(action.type){

        case "SET_USER":
            return action.newUser

        // case "PROFILE_USER":
        //     return action.profileUser

        case "PERSIST_USER":
            return action.persistedUser

        default:
            return state;
    }
}

export default userReducer;