import React from 'react'
import {Route, Switch} from 'react-router-dom';
import AdminNav from './AdminNav';
import DashboardPage from './AdminDashboard/DashboardPage'
import PostListPage from './AdminPostList/PostListPage'
import PostPage from './AdminPost/PostPage'
import ProfilePage from './AdminProfile/ProfilePage'

function AdminPage() {
    return (
        <div className='admin-main animate__animated animate__fadeIn'>
            <AdminNav />
            <div className='main-admin container'>
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

export default AdminPage
