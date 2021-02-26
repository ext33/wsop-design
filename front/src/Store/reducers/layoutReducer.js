const initialState = {
    showNav: true
}

export default function layoutReducer(state = initialState, action){
    switch (action.type) {
        case 'NAV-HIDE':
            return {
                showNav: false
            }
        case 'NAV-SHOW':
            return {
                showNav: true
            }
        default:
            return state
    }
}