import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

function ProfilePage(props) {
    return (
        <div className='animate__animated animate__fadeIn'>
            { props.username && !props.error ? 
            <div>
                {props.username}
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

function mapStateToProps(state){
    return {
        username: state.authReducer.username,
        email: state.authReducer.email,
        userImage: state.authReducer.userImage,
        error: state.authReducer.error
    }
}

export default connect(mapStateToProps, null)(ProfilePage)
