export const loginError = (loginError) => {
    // console.log(loginError)
    return {
        type: "LOGIN_ERROR",
        loginError
    }
}