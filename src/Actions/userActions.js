// creates actions which gets called in components when needed. These actions when called get checked in the reduce which check for cases that matches the action type to execute the change of the state. The parameter of the action is the argument given when invoked ex: after a promise get return from a fetch to send some informations to change the state.

export const setUser = (newUser) => {
    return {
        type: "SET_USER",
        newUser
    }
}

export const userPersist = (persistedUser) => {
    return {
        type: "PERSIST_USER",
        persistedUser
    }
}

export const deleteUser = (user) => {
    return {
        type: "DELETE_USER",
        user
    }
}

export const addToCart = (cartItem) => {
    return {
        type: "ADD_TO_CART", 
        cartItem
    }
}

export const removeFromCart = (cartItem) => {
    return {
        type: "REMOVE_FROM_CART",
        cartItem
    }
}

export const createOrder = (newOrder) => {
    return{
        type: "CREATE_ORDER",
        newOrder
    }
}

export const totalPrice = (totalPrice) => {
    return{
        type: "TOTAL_PRICE",
        totalPrice
    }
}