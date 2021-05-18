import React from 'react'
import {Redirect, useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../../../../Store/actions/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ProfilePage(props) {
    let history = useHistory()

    function logoutHandler() {
        props.logoutUser()
        history.push('/')
    }

    function avatarDispaly() {
        if (localStorage.ws_d_userImage) {
            return <img className='user-image' alt='' src={localStorage.ws_d_userImage} />
        } else {
            return <FontAwesomeIcon className='user-image' icon={['fas', 'user-circle']} />
        }
    }

    return (
        <div className='animate__animated animate__fadeIn'>
            { localStorage.ws_d_username ? 
            <div className='flex profile_container'>
                <div className='profile_image'>
                    {avatarDispaly()}
                </div>
                <div className='profile_info flex'>
                    <p>Username: {localStorage.ws_d_username}</p>
                    <p>Email: {localStorage.ws_d_email}</p>
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