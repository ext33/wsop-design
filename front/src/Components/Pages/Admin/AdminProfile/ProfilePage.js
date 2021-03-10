import React from 'react'
import {Redirect} from 'react-router-dom'

function ProfilePage(props) {
    return (
        <div className='animate__animated animate__fadeIn'>
            { localStorage.username ? 
            <div className='flex profile-container'>
                <div className='profile-image'>
                    <img className='user-image' alt='' src={localStorage.userImage} />
                </div>
                <div className='profile-info flex'>
                    <p>Username: {localStorage.username}</p>
                    <p>Email: {localStorage.email}</p>
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

export default ProfilePage
