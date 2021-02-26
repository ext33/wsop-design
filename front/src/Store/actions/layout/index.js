
export function setNavLayout(set){
    return (dispatch) => {
        if(set === false){
            dispatch({type: 'NAV-HIDE'})
        }
        else {
            dispatch({type: 'NAV-SHOW'})
        }
    }
}