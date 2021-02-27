import React from 'react'
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function AdminNav() {
    // const dashboardIcon =  />

    return (
        <div className='admin-nav animate__animated animate__fadeIn'>
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
    )
}

export default AdminNav
