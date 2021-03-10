const initialState = {
    userLogined: false,
    error: null
}

export default function authReducer(state = initialState, action){
    switch (action.type) {
        case 'AUTH-SUCCESS':
            localStorage.setItem('token', action.token)
            localStorage.setItem('refreshToken', action.refreshToken)
            localStorage.setItem('uid', action.user.uid)
            localStorage.setItem('username', action.user.username)
            localStorage.setItem('email', action.user.email)
            localStorage.setItem('userImage', action.user.userImage)
            return {
                userLogined: true,
            }
        case 'AUTH-ERROR':
            return {
                userLogined: false,
                error: action.error
            }
        case 'AUTH-EXIT':
            localStorage.clear('token')
            localStorage.clear('refreshToken')
            localStorage.clear('uid')
            localStorage.clear('username')
            localStorage.clear('email')
            localStorage.clear('userImage')
            return state
        case 'AUTH-CLEAR':
            return {
                error: null
            }
        default:
            return state
    }
}