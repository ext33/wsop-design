import React, { useState, useEffect, useRef } from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import AdminNav from './AdminNav'
import DashboardPage from './AdminDashboard/DashboardPage'
import PostListPage from './AdminPostList/PostListPage'
import PostPage from './AdminPost/PostPage'
import ProfilePage from './AdminProfile/ProfilePage'
import RotateNotify from './RotateNotify'
import Nav from '../../Nav'

function AdminPage(props) {

    let errorCheck = useRef(false)
    let page = 'Dashboard'
    const [displayAdmin, setDisplayAdmin] = useState(true)

    if (props.location.pathname === '/admin/profile') page = 'Profile'
    if (props.location.pathname === '/admin/post-list') page = 'Posts'
    if (props.location.pathname.includes('/post/')) page = 'Post'

    useEffect(() => {

        if (errorCheck.current === false) {
            if (props.error) {
                props.history.push({
                    pathname: "/error",
                    state: {
                        status: props.status,
                        error: props.error
                    }
                })
                errorCheck.current = true
            }
        }

        if (props.location.pathname !== '/error') errorCheck.current = false

    }, [props])

    window.addEventListener('resize', ()=>{
        window.innerWidth < 1024 ? setDisplayAdmin(false) : setDisplayAdmin(true)
    })

    return (
        <>
            {   displayAdmin === true ?
                <div className='animate__animated animate__fadeIn'>
                    <AdminNav pageTitle={page} />
                    <div className='admin_main container'>
                        <Switch>
                            <Route 
                                path='/admin'  
                                exact
                                component={DashboardPage}
                            />
                            <Route 
                                path='/admin/post-list'
                                exact
                                component={PostListPage}
                            />
                            <Route 
                                path='/admin/post/:id'
                                exact
                                component={PostPage}
                            />
                            <Route 
                                path='/admin/profile'
                                exact
                                component={ProfilePage}
                            />
                        </Switch>
                    </div>
                </div>
                : <>
                <Nav forceShowNav />
                <RotateNotify />
                </>
            }
        </>
    )
}

function mapStateToProps(state){
    return {
        status: state.errorsReducer.status,
        error: state.errorsReducer.error,
    }
}

export default connect(mapStateToProps, null)(withRouter(AdminPage))
