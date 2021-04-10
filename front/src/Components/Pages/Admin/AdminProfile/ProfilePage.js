import React from 'react'
import {Redirect, useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../../../../Store/actions/auth'

function ProfilePage(props) {
    let history = useHistory()

    function logoutHandler() {
        props.logoutUser()
        history.push('/')
    }

    return (
        <div className='animate__animated animate__fadeIn'>
            { localStorage.username ? 
            <div className='flex profile_container'>
                <div className='profile_image'>
                    <img className='user-image' alt='' src={localStorage.userImage} />
                </div>
                <div className='profile_info flex'>
                    <p>Username: {localStorage.username}</p>
                    <p>Email: {localStorage.email}</p>
                    <button type='button' className='input-submit' onClick={() => logoutHandler()}>Exit from account</button>
                </div>
            </div>
            : <Redirect to={{
                pathname: "/error",
                state: {
                    type: 500,
                }
            }}/>
            }
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return {
        logoutUser: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(ProfilePage)