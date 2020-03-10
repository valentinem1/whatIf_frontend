import { combineReducers } from 'redux'
import itemReducer from '../Reducers/itemReducer'
import userReducer from '../Reducers/userReducer'
import reviewReducer from '../Reducers/reviewReducer'
import loginErrorsReducer from '../Reducers/loginErrorsReducer'

const rootReducer = combineReducers({ 
    items: itemReducer,
    user: userReducer,
    reviews: reviewReducer,
    errors: loginErrorsReducer
})

export default rootReducer;