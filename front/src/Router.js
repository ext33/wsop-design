import React from 'react'
import {Route, Switch} from 'react-router-dom';
import MainPage from "./Components/Pages/MainPage/MainPage";
import SubmitPostPage from "./Components/Pages/SubmitPostPage/SubmitPostPage";
import ErrorPage from "./Components/Pages/Error/ErrorPage";
import DashboardPage from './Components/Pages/AdminDashboard/DashboardPage';
import PostListPage from './Components/Pages/AdminPostList/PostListPage';
import LoginPage from './Components/Pages/LoginPage/LoginPage';
import PostPage from './Components/Pages/AdminPost/PostPage';
import ProfilePage from './Components/Pages/AdminProfile/ProfilePage';

function RouteWithSubRoutes(route) {
    return (
      <Route
        path={route.path}
        render={props => (
          <route.component {...props} routes={route.routes} />
        )}
      />
    );
  };

function RouterView() {

    const routes = [
        {
            path:'/',
            exact: true, 
            component: MainPage,
        },
        {
            path: '/submit-post',
            exact: true,
            component: SubmitPostPage
        },
        {
            path: '/admin', 
            exact: true,
            component: DashboardPage,
        },
        {
            path:'/admin/post-list',
            exact: true,
            component: PostListPage
        },
        {
            path: '/admin/post/:id',
            // exact: true,
            component: PostPage
        },
        {
            path:'/admin/profile',
            // exact: true, 
            component: ProfilePage
        },
        {
            path: '/login', 
            exact: true,
            component: LoginPage
        },
        {
            path: '/error', 
            exact: true,
            component: ErrorPage
        },
        {
            path: '*', 
            component: ErrorPage
        }
    ];

    return (
        <Switch>
            {
                routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                    )
                )
            }
        </Switch>
    )
}

export default RouterView
