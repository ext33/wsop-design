import {loginUser} from '../../Api/axios'

export function login(data) {
    return async (dispatch) => {
        let response = await loginUser(data)    
        if (response.status === 200) {
            dispatch({type: 'AUTH-SUCCESS', user: response.user, token: response.token, refreshToken: response.refreToken})
        } else {
            dispatch({type: 'AUTH-ERROR'})
        }
    }
}

export function logout() {
    return async (dispatch) => {
        dispatch({type: 'AUTH-EXIT'})
    }
}