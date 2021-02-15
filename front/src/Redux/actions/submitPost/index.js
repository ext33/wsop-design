import is from 'is_js'
import {sendSubmitPost} from '../../../Api/axios'

export function submitPostAction(data) {
    return async (dispatch)=>{
        let isValid = true
        let result
        if(data.username && data.email && data.description && data.image){
            if(!data.username.trim()) isValid=false
            if(!data.email.trim() || !is.email(data.email)) isValid=false
            if(!data.description.trim()) isValid=false
            if(!data.image) isValid=false
        } else {
            isValid=false  
        }
        if(isValid){
            result = await sendSubmitPost(data)
            if(result.status === 200){
                dispatch({type: 'ADD'})
                
            } else {
                dispatch({type: 'ERROR', error: 'Sending error'})
            }
        } else {
            dispatch({type: 'ERROR', error: 'Invalid form data'})
        }
    }
}

export function clearState(){
    return {
        type: 'CLEAR'
    }
}