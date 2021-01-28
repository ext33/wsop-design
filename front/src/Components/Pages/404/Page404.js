import React from "react";
import {withRouter} from 'react-router-dom'

function Page404(props){

    function goHome(){
        props.history.push('/')
    }

    return(
        <div className={'page404 container'}>
            <h1>Page not found</h1>
            <button className={'main-button'} onClick={goHome}>Go to home page</button>
        </div>
    )
}

export default withRouter(Page404)