import React, { useEffect, useRef } from 'react'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import MainPage from "./Components/Pages/MainPage/MainPage"
import SubmitPostPage from "./Components/Pages/SubmitPostPage/SubmitPostPage"
import ErrorPage from "./Components/Pages/Error/ErrorPage"
import AdminPage from './Components/Pages/Admin/AdminPage'
import LoginPage from './Components/Pages/LoginPage/LoginPage'

function RouterView(props) {

    let errorCheck = useRef(false)
    let formClearCheck = useRef(false)

    useEffect(()=>{

        if (errorCheck.current === false){
            if (props.error){
                props.history.push({
                    pathname: "/error",
                    state: {
                        status: props.status,
                        error: props.error
                    }
                })
                errorCheck.current = true
            }
        }

        if(formClearCheck.current === true) props.clearFormState()

        if(props.location.pathname === '/submit-post' || props.location.pathname === '/login') formClearCheck.current = true

        if (props.location.pathname !== '/error') errorCheck.current = false

    }, [props])

    return (
        <Switch>
            <Route 
                path='/' 
                exact
                component={MainPage} 
            />
            <Route 
                path='/submit-post' 
                exact 
                component={SubmitPostPage} 
            />
            <Route 
                path='/admin' 
                render={ 
                    () => localStorage.getItem('token') ? <AdminPage /> : <Redirect to={{pathname: '/login'}} />
                }
            />
            <Route 
                path='/error' 
                exact 
                component={ErrorPage}
            />
            <Route 
                path='/login'
                exact
                render={ 
                    () => localStorage.getItem('token') ? <Redirect to='/admin' /> : <LoginPage />
                }
            />
            
            <Redirect 
                from='*' 
                to='/error' 
            />
        </Switch>
    )
}

function mapStateToProps(state){
    return {
        status: state.errorsReducer.status,
        error: state.errorsReducer.error,
    }
}

function mapDispatchToProps(dispatch){
    return{
        clearFormState: () => {dispatch ({type: 'FORM-CLEAR'}); dispatch({type: 'AUTH-CLEAR'})},
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RouterView))