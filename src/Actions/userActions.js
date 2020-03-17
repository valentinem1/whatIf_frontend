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