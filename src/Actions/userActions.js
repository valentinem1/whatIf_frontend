export const setUser = (newUser) => {
    return {
        type: "SET_USER",
        newUser
    }
}

// export const userProfile = (userProfile) => {
//     return {
//         type: "PROFILE_USER",
//         userProfile
//     }
// }

export const userPersist = (persistedUser) => {
    return {
        type: "PERSIST_USER",
        persistedUser
    }
}