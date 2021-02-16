const initialState = {
    imagesObj: [],
    dataIsReady: false,
    error: null
}

export default function imagesReducer(state = initialState, action){
    switch (action.type) {
        case 'IMAGE-FETCH':
            return {
                imagesObj: action.images,
                dataIsReady: true,
            }
        case 'IMAGE-ERROR':
            return {
                error: action.error
            }
        default:
            return state
    }
}