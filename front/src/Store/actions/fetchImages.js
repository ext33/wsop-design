import {fetchImages, fetchSubmittedImages} from '../../Api/axios'
import {readCookie} from '../middleware/cookies'

export function fetchImageData () {
    const token = readCookie('token')

    return async (dispatch) => {
        let result = await fetchImages(token)
        if (result.status === 200) {
            dispatch({type: 'IMAGE-FETCH', images: result.posts})
        } else {
            dispatch({type: 'ERROR-ADD', status: result.status, error: result.error})
        }
    }
}

export function fetchSubmittedImageData () {

    return async (dispatch) => {
        dispatch({type: 'IMAGE-CLEAR'})
        let result = await fetchSubmittedImages()
        if (result.status === 200) {
            dispatch({type: 'IMAGE-FETCH', images: result.posts})
        } else {
            dispatch({type: 'ERROR-ADD', status: result.status, error: result.error})
        }
    }
}