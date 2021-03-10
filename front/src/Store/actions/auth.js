import is from 'is_js'
import {loginUser} from '../../Api/axios'

export function login(data) {
    return async (dispatch) => {
        
        let isValid = true

        if(data.email && data.password){
            if(!data.email.trim() || !is.email(data.email)) isValid=false
            if(!data.password.trim() || data.password.length < 8) isValid=false
        } else {
            isValid=false  
        }

        if(isValid){
            let response = await loginUser(data)   
            if (response.status === 200) {
                dispatch({type: 'AUTH-SUCCESS', user: response.user, token: response.token, refreshToken: response.refreToken})
            } else if(response.status === 404){
                dispatch({type: 'AUTH-ERROR', error: 'User not found'})
            } else {
                dispatch({type: 'AUTH-ERROR', error: 'Connection error'})
            }
        } else {
            dispatch({type: 'AUTH-ERROR', error: 'Invalid form data'})
        }
    }
}

export function logout() {
    return async (dispatch) => {
        dispatch({type: 'AUTH-EXIT'})
    }
}