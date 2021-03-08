import React from 'react'
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function AdminNav(props) {
    return (
        <>
            <div className='admin-nav-sidebar'>
                <div className='nav-logo'>
                    <NavLink to="/" exact className="admin-logo logo">WSOP.DESIGN</NavLink>
                </div>
                <NavLink to="/admin/profile" strict className="admin-nav-link">
                    <FontAwesomeIcon icon={['fas', 'user-circle']} /> PROFILE
                </NavLink>
                <NavLink to="/admin" strict className="admin-nav-link">
                    <FontAwesomeIcon icon={['fas', 'tachometer-alt']} /> DASHBOARD
                </NavLink>
                <NavLink to="/admin/post-list" strict className="admin-nav-link">
                    <FontAwesomeIcon icon={['fas', 'images']} /> POSTS
                </NavLink>
            </div>
            <div className='admin-nav-top'>
                <div className='nav-top-items'>
                    <div className='nav-top-item admin-title animate__animated animate__fadeIn'>
                        {props.pageTitle}
                    </div>
                    <div className='nav-top-item'>
                        <FontAwesomeIcon icon={['fas', 'bell']} />
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default AdminNav
