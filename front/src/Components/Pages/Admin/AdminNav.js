import React from 'react'
import {NavLink, useHistory} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {connect} from 'react-redux'
import {logout} from '../../../Store/actions/auth'

function AdminNav(props) {

    let history = useHistory()

    function logoutHandler() {
        props.logoutUser()
        history.push('/')
    }

    return (
        <>
            <div className='admin_nav-sidebar'>
                <div className='admin_nav-logo'>
                    <NavLink to="/" exact className="admin-logo logo_logo">WSOP.DESIGN</NavLink>
                </div>
                <NavLink to="/admin/profile" strict className="admin_nav-link">
                    <FontAwesomeIcon icon={['fas', 'user-circle']} /> PROFILE
                </NavLink>
                <NavLink to="/admin" strict className="admin_nav-link">
                    <FontAwesomeIcon icon={['fas', 'tachometer-alt']} /> DASHBOARD
                </NavLink>
                <NavLink to="/admin/post-list" strict className="admin_nav-link">
                    <FontAwesomeIcon icon={['fas', 'images']} /> POSTS
                </NavLink>
            </div>
            <div className='admin_nav-top'>
                <div className='admin_nav-top-items'>
                    <div className='admin_nav-top-item admin_admin-title'>
                        {props.pageTitle}
                    </div>
                    <div onClick={() => logoutHandler()} className='nav-top-item nav-top-icon'>
                        <FontAwesomeIcon icon={['fas', 'sign-out-alt']} />
                    </div>
                </div>
            </div>
            
        </>
    )
}

function mapDispatchToProps(dispatch){
    return {
        logoutUser: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(AdminNav)
