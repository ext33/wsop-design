import {fetchImageById, updateImageById, deleteImageById} from '../../../Api/axios'

export function fetchPost(id) {
    return async (dispatch) => {
        let result = await fetchImageById(id)
        if (result.status === 200) {
            dispatch({type: 'POST-FETCH', post: result.image})
        } else {
            dispatch({type: 'POST-ERROR', errorStatus: result.status})
        }
    }
}

export function updatePost(id) {
    return async (dispatch) => {
        dispatch({type: 'POST-CLEAR'})
        let result = await updateImageById(id)
        if (result.status === 200) {
            dispatch({type: 'POST-UPDATE', post: result.image})
        } else {
            dispatch({type: 'POST-ERROR', errorStatus: result.status})
        }
    }
}

export function deletePost(id) {
    return async (dispatch) => {
        console.log(1)
        let result = await deleteImageById(id)
        if (result.status === 200) {
            dispatch({type: 'POST-DELETE'})
        } else {
            dispatch({type: 'POST-ERROR', errorStatus: result.status})
        }
    }
}