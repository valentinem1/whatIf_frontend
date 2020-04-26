import { combineReducers } from 'redux'
import itemReducer from '../Reducers/itemReducer'
import userReducer from '../Reducers/userReducer'
import reviewReducer from '../Reducers/reviewReducer'
import loginErrorsReducer from '../Reducers/loginErrorsReducer'

// the rootReducer combines all the reducers.
// once the app grow bigger it is best practice to separate reducer each managing different part of the state.
// separation of concern.
const rootReducer = combineReducers({ 
    items: itemReducer,
    user: userReducer,
    reviews: reviewReducer,
    errors: loginErrorsReducer
})

export default rootReducer;