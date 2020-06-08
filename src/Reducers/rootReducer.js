import { combineReducers } from 'redux'
import itemReducer from '../Reducers/itemReducer'
import userReducer from '../Reducers/userReducer'
import reviewReducer from '../Reducers/reviewReducer'
import loginErrorsReducer from '../Reducers/loginErrorsReducer'

// the rootReducer combines all the reducers.
// once the app grow bigger it is best practice to separate reducer each managing different part of the state for separation of concern.
const rootReducer = combineReducers({ 
    items: itemReducer, // => takes care of item related actions
    user: userReducer, // => takes care of user related actions
    reviews: reviewReducer, // => takes care of reviews related actions
    errors: loginErrorsReducer // => takes care of loggin/signup error action
})

export default rootReducer;