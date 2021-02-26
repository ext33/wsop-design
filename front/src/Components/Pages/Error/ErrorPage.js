import React, {useState, useEffect} from "react"
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import {setNavLayout} from '../../../Store/actions/layout'

function ErrorPage(props){

    let [title, setTitle] = useState(null)

    props.showNav(false)

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

function mapStateToProps(state){
    return{
        message: state.submitFormReducer.message,
        error: state.submitFormReducer.error,
        layout: state.layoutReducer.showNav,
    }
  }
  
  function mapDispatchToProps(dispatch){
    return{
        showNav: (data) => dispatch(setNavLayout(data))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ErrorPage))