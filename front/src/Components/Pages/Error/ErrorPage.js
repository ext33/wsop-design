import React from "react"
import {connect} from "react-redux"

function ErrorPage(props){

    let title = null

    if (props.location.state) title = `${props.location.state.status} | ${props.location.state.error}`
    else title = '404 | Page not found'

    setTimeout(() => props.clearError(), 100)
    
    function goHome(){
        return(
            props.history.push('/')
        )
    }

    return (
        <div className='page404 container animate__animated animate__fadeIn'>
            {props.error? <h1>{this.props.error}</h1>: null}
            <h2>{title}</h2>
            <button className='info-button' onClick={goHome}>Go to home page</button>
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return{
        clearError: () => dispatch({type: 'ERROR-CLEAR'}),
    }
  }

export default connect(null, mapDispatchToProps)(ErrorPage)