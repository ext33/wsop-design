import React from 'react'
import {Route, Switch, withRouter} from 'react-router-dom';
import AdminNav from './AdminNav';
import DashboardPage from './AdminDashboard/DashboardPage'
import PostListPage from './AdminPostList/PostListPage'
import PostPage from './AdminPost/PostPage'
import ProfilePage from './AdminProfile/ProfilePage'

function AdminPage(props) {

    let page = 'Dashboard'
    if (props.location.pathname === '/admin/profile') page = 'Profile'
    if (props.location.pathname === '/admin/post-list') page = 'Posts'
    if (props.location.pathname.includes('/post/')) page = 'Post'
    

    
    return (
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
    )
}

export default withRouter(AdminPage)
