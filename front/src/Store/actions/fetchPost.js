import {fetchImageById, submitImageById, archiveImageById, deleteImageById} from '../../Api/axios'
import {readCookie} from '../middleware/cookies'

export function fetchPost(id) {
    return async (dispatch) => {
        const token = readCookie('token')

        let result = await fetchImageById(id, token)
        if (result.status === 200) {
            dispatch({type: 'POST-FETCH', post: result.post})
        } else {
            dispatch({type: 'ERROR-ADD', status: result.status, error: result.error})
        }
    }
}

export function submitPost(id) {
    return async (dispatch) => {
        const token = readCookie('token')

        dispatch({type: 'POST-DELETE'})
        let result = await submitImageById(id, token)
        if (result.status === 200) {
            dispatch({type: 'POST-UPDATE', post: result.image})
        } else {
            dispatch({type: 'ERROR-ADD', status: result.status, error: result.error})
        }
    }
}

export function archivePost(id) {
    return async (dispatch) => {
        const token = readCookie('token')

        dispatch({type: 'POST-DELETE'})
        let result = await archiveImageById(id, token)
        if (result.status === 200) {
            dispatch({type: 'POST-UPDATE', post: result.image})
        } else {
            dispatch({type: 'ERROR-ADD', status: result.status, error: result.error})
        }
    }
}

export function deletePost(id) {
    return async (dispatch) => {
        const token = readCookie('token')

        let result = await deleteImageById(id, token)
        if (result.status === 200) {
            dispatch({type: 'POST-DELETE'})
        } else {
            dispatch({type: 'ERROR-ADD', status: result.status, error: result.error})
        }
    }
}