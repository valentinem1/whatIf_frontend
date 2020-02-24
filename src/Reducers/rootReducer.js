import { combineReducers } from 'redux'
import itemReducer from '../Reducers/itemReducer'
import userReducer from '../Reducers/userReducer'
import cartReducer from '../Reducers/cartReducer'

const rootReducer = combineReducers({ 
    items: itemReducer,
    user: userReducer,
    cart: cartReducer
})

export default rootReducer;