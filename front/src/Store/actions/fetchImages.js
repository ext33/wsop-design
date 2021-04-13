import {fetchImages} from '../../Api/axios'

export function fetchImageData () {
    return async (dispatch) => {
        let result = await fetchImages()
        if (result.status === 200) {
            dispatch({type: 'IMAGE-FETCH', images: result.posts})
        } else {
            dispatch({type: 'ERROR-ADD', status: result.status, error: result.error})
        }
    }
}
