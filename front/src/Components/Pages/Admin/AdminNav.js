import React from 'react'
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function AdminNav() {
    return (
        <>
            <div className='admin-nav-sidebar'>
                <NavLink to="/admin" strict className="admin-nav-link">
                    <FontAwesomeIcon icon={['fas', 'tachometer-alt']} /> DASHBOARD
                </NavLink>
                <NavLink to="/admin/post-list" strict className="admin-nav-link">
                    <FontAwesomeIcon icon={['fas', 'images']} /> POSTS
                </NavLink>
                <NavLink to="/admin/profile" strict className="admin-nav-link">
                    <FontAwesomeIcon icon={['fas', 'user-circle']} /> PROFILE
                </NavLink>
            </div>
            <div className='admin-nav-top'>
                <div className='nav-logo'>
                    <NavLink to="/" exact className="admin-logo logo">WSOP.DESIGN</NavLink>
                </div>
                <div className='nav-top-items'>
                    <div className='nav-top-item'>
                        Dashboard
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
