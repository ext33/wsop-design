const initialState = {
    post: {},
}

export default function postReducer(state = initialState, action){
    switch (action.type) {
        case 'POST-FETCH':
            return {
                post: action.post,
            }
        case 'POST-UPDATE':
            return {
                post: Array(action.post),
            }
        case 'POST-DELETE':
            return state
        default:
            return state
    }
}