const initialState = {
    imagesObj: [],
    dataIsReady: false,
}

export default function imagesReducer(state = initialState, action){
    switch (action.type) {
        case 'FETCH':
            return {
                imagesObj: action.fetchingImages,
                dataIsReady: true,
            }
        default:
            return state
    }
}