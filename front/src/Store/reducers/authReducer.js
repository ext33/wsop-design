const initialState = {
    uid: null,
    username: null,
    userImage: null,
    email: null,
    token: null,
    refteshToken: null,
    error: null
}

export default function authReducer(state = initialState, action){
    switch (action.type) {
        case 'AUTH-SUCCESS':
            localStorage.setItem('uid', action.user.uid)
            localStorage.setItem('username', action.user.username)
            localStorage.setItem('token', action.token)
            localStorage.setItem('refreshToken', action.refreshToken)
            return {
                uid: action.user.uid,
                username: action.user.username,
                userImage: action.user.userImage,
                email: action.user.email,
                token: action.token,
                refreshToken: action.refreshToken
            }
        case 'AUTH-ERROR':
            return {
                error: action.error
            }
        case 'AUTH-EXIT':
            localStorage.clear('uid')
            localStorage.clear('username')
            localStorage.clear('token')
            localStorage.clear('refreshToken')
            return state
        default:
            return state
    }
}