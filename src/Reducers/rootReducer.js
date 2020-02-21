import { combineReducers } from 'redux'
import itemReducer from '../Reducers/itemReducer'
import userReducer from '../Reducers/userReducer'


const rootReducer = combineReducers({ 
    items: itemReducer,
    user: userReducer
})

export default rootReducer;