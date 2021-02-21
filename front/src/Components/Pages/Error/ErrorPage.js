import React, {useState, useEffect} from "react"
import {withRouter} from 'react-router-dom'

function ErrorPage(props){

    let [title, setTitle] = useState(null)

    useEffect(() => {
        if (props.location.state) {
            if (props.location.state.type === 500){
                setTitle('Error! Try again later...')
            } else {
                setTitle('Page not found')
            }
        } else {
            setTitle('Page not found')
        }
    }, [props.location.state])

    function goHome(){
        props.history.push('/')
    }

    return (
        <div className='page404 container'>
            {props.error? <h1>{this.props.error}</h1>: null}
            <h2>{title}</h2>
            <button className='info-button' onClick={goHome}>Go to home page</button>
        </div>
    )
}

export default withRouter(ErrorPage)