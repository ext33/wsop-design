const initialState = {
    status: null,
    error: null,
}

export default function errorsReducer(state = initialState, action){
    switch (action.type) {
        case 'ERROR-ADD':
            return {
                status: action.status, 
                error: action.error
            }
        case 'ERROR-CLEAR':
            return {
                initialState    
            }
        default:
            return state
    }
}