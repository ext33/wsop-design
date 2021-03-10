import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import { useHistory } from 'react-router'
import {login} from '../../../Store/actions/auth'
import Info from "../../UI/FormMessage";


function LoginForm(props) {

    let history = useHistory()

    const [formData, setFormData] = useState({
        email: null,
        password: null
    })

    const [modal, setModal] = useState(false)

    useEffect(() => {
        if (props.error) {
            setModal(true)
        } else {
            if (localStorage.getItem('token')) {
                history.push('/admin')
            }
        }
    }, [props, history])

    function ChangeInput(newValue, param){
        if (modal === true) {
            setModal(false)
            props.clearState()
        }
        setFormData((prevState) => {
            return{
                ...prevState,
                [param]: newValue
            }
        })
    }

    function loginHandler() {
        props.loginUser(formData)  
        if (props.error) {
            setModal(true)
        } 
    
    }
    return (
            <form id='login-form' className='flex'>
                <div className='error-cont'>
                    { modal ? 
                        <Info 
                            message={props.message} 
                            error={props.error}
                        />
                    : null
                    }
                </div>
                <span>Email</span>
                <input className='input input-main' id='email' type='email' onChange={(event) => ChangeInput(event.target.value, event.target.id)} />
                <span>Password</span>
                <input className='input input-main' id='password' type='password' onChange={(event) => ChangeInput(event.target.value, event.target.id)} />
                <button type='button' onClick={() => loginHandler()}>Login</button>
            </form>
    )
}

function mapStateToProps(state){
    return {
        error: state.authReducer.error,
    }
}

function mapDispatchToProps(dispatch){
    return {
        loginUser: (data) => dispatch(login(data)),
        clearState: () => dispatch({type: 'AUTH-CLEAR'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
