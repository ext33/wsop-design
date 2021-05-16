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
        if (!!localStorage.userImage) {
            return <img className='user-image' alt='' src={localStorage.userImage} />
        } else {
            return <FontAwesomeIcon className='user-image' icon={['fas', 'user-circle']} />
        }
    }

    return (
        <div className='animate__animated animate__fadeIn'>
            { localStorage.username ? 
            <div className='flex profile_container'>
                <div className='profile_image'>
                    {avatarDispaly()}
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