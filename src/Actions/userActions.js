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