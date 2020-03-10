const initialState = {
    loginError: ""
}

const loginErrorsReducer = (state=initialState, action) => {
    switch(action.type){

        case "LOGIN_ERROR":
            // console.log(action.loginError.error)
            return {errors: action.loginError.error}

        default: 
            return state
    }
}

export default loginErrorsReducer;