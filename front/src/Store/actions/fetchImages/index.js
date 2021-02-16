import {fetchImages} from '../../../Api/axios'

export function fetchImageData () {
    console.log(11)
    return async (dispatch) => {
        console.log(3)
        let result = await fetchImages()
        console.log(result)
        if (result.status === 200) {
            dispatch({type: 'IMAGE-FETCH', images: result.images})
        } else {
            dispatch({type: 'IMAGE-ERROR', error: result.error})
        }
    }
}
