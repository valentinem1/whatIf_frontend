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
    // console.log(cartItem)
    return {
        type: "ADD_TO_CART", 
        cartItem
    }
}