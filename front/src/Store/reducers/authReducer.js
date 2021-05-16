import {setCookie, deleteCookie} from '../middleware/cookies'


const initialState = {
    userLogined: false,
    error: null
}

function clearData() {
    deleteCookie('token')
    deleteCookie('refreshToken')
    localStorage.clear('uid')
    localStorage.clear('username')
    localStorage.clear('email')
    localStorage.clear('userImage')
}

export default function authReducer(state = initialState, action){
    switch (action.type) {
        case 'AUTH-SUCCESS':
            setCookie('token', action.token)
            setCookie('refreshToken', action.refreshToken)
            localStorage.setItem('uid', action.user.uid)
            localStorage.setItem('username', action.user.username)
            localStorage.setItem('email', action.user.email)
            if (action.user.userImage){
                localStorage.setItem('userImage', action.user.userImage)
            } else {
                localStorage.setItem('userImage', '')
            }
            return {
                userLogined: true,
            }
        case 'AUTH-ERROR':
            clearData()
            return {
                userLogined: false,
                error: action.error
            }
        case 'AUTH-EXIT':
            clearData()
            return state
        case 'AUTH-CLEAR':
            return {
                error: null
            }
        default:
            return state
    }
}