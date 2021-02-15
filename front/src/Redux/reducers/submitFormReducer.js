const initialState = {
    message: null,
    error: null,
}

export default function submitFormReducer(state = initialState, action){
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                message: 'Post submitted!'
            }
            case 'ERROR':
            return {
                message: null,
                error: action.error
            }
            case 'CLEAR':
                return {
                    initialState    
                }
        default:
            return state
    }
}