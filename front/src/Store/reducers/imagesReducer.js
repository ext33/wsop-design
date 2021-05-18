const initialState = {
    imagesObj: [],
}

export default function imagesReducer(state = initialState, action){
    switch (action.type) {
        case 'IMAGE-FETCH':
            return {
                imagesObj: action.images,
            }
        case 'IMAGE-CLEAR':
            return state
        default:
            return state
    }
}