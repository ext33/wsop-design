import {setCookie, deleteCookie} from '../middleware/cookies'


const initialState = {
    userLogined: false,
    error: null
}

function clearData() {
    deleteCookie('token')
    deleteCookie('refreshToken')
    localStorage.clear('ws_d_uid')
    localStorage.clear('ws_d_username')
    localStorage.clear('ws_d_email')
    localStorage.clear('ws_d_userImage')
}

export default function authReducer(state = initialState, action){
    switch (action.type) {
        case 'AUTH-SUCCESS':
            setCookie('token', action.token)
            setCookie('refreshToken', action.refreshToken)
            localStorage.setItem('ws_d_uid', action.user.uid)
            localStorage.setItem('ws_d_username', action.user.username)
            localStorage.setItem('ws_d_email', action.user.email)
            if (action.user.userImage){
                localStorage.setItem('ws_d_userImage', action.user.userImage)
            } else {
                localStorage.setItem('ws_d_userImage', '')
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