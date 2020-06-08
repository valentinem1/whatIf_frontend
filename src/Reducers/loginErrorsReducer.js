// initialize state here:
const initialState = {
    loginError: ""
}

const loginErrorsReducer = (state=initialState, action) => {
    // switch statement allows to check for cases if cases are match the code will get executed if not the default case will execute.
    switch(action.type){

        // set the state value to the error if any error occurs during loggin or signup.
        case "LOGIN_ERROR":
            return {errors: action.loginError.error}
            
        // if no cases matchs the request it will return the original state.
        // always have a default case in switch statement!
        default: 
            return state
    }
}

export default loginErrorsReducer;