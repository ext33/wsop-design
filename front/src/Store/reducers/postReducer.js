const initialState = {
    post: {},
    errorStatus: null,
    deleted: false
}

export default function postReducer(state = initialState, action){
    switch (action.type) {
        case 'POST-FETCH':
            return {
                post: action.post,
            }
        case 'POST-ERROR':
            return {
                errorStatus: action.errorStatus
            }
        case 'POST-UPDATE':
            return {
                post: action.post,
            }
        case 'POST-DELETE':
            return {
                deleted: true
            }
        default:
            return state
    }
}