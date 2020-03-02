import { combineReducers } from 'redux'
import itemReducer from '../Reducers/itemReducer'
import userReducer from '../Reducers/userReducer'
import reviewReducer from '../Reducers/reviewReducer'

const rootReducer = combineReducers({ 
    items: itemReducer,
    user: userReducer,
    reviews: reviewReducer
})

export default rootReducer;