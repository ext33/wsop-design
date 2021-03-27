const initialState = {
    message: null,
    error: null,
}

export default function submitFormReducer(state = initialState, action){
    switch (action.type) {
        case 'FORM-ADD':
            return {
                ...state,
                message: 'Post submitted!'
            }
        case 'FORM-ERROR':
            return {
                message: null,
                error: action.error
            }
        case 'FORM-CLEAR':
            return {
                initialState    
            }
        default:
            return state
    }
}