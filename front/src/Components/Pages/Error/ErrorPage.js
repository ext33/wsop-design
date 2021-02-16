import React, {useState, useEffect} from "react";
import {withRouter} from 'react-router-dom'

function ErrorPage(props){

    let [title, setTitle] = useState(null);

    useEffect(() => {
        if(props.type === 404){
            setTitle('Page not found')
        } else {
            setTitle('Error! Try again later...')
        }
    }, [props.type])

    function goHome(){
        props.history.push('/')
    }

    return(
        <div className={'page404 container'}>
            {props.error ? <h1>this.props.error</h1>: null}
            <h1>{title}</h1>
            <button className={'main-button'} onClick={goHome}>Go to home page</button>
        </div>
    )
}

export default withRouter(ErrorPage)