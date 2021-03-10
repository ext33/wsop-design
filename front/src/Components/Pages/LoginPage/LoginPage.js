import React from 'react'
import {connect} from 'react-redux'
import { useHistory } from 'react-router'
import {login} from '../../../Store/actions/auth'


function LoginPage(props) {

    let history = useHistory()

    async function loginHandler() {
        await props.loginUser('a')
        if (localStorage.getItem('token')){
            history.push('/admin')
        } else {
            history.push('/error')
        }
    }
    return (
        <div className='animate__animated animate__fadeIn'>
            <form id='login-form' className='flex'>
                <span>Email</span>
                <input type='email' />
                <span>Password</span>
                <input type='password' />
                <button type='button' onClick={()=>loginHandler()}>Login</button>
            </form>
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return {
        loginUser: (data) => dispatch(login(data))
    }
}

export default connect(null, mapDispatchToProps)(LoginPage)
