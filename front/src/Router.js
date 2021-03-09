import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom';
import MainPage from "./Components/Pages/MainPage/MainPage";
import SubmitPostPage from "./Components/Pages/SubmitPostPage/SubmitPostPage";
import ErrorPage from "./Components/Pages/Error/ErrorPage";
import AdminPage from './Components/Pages/Admin/AdminPage';
import LoginPage from './Components/Pages/LoginPage/LoginPage';

export default function RouterView() {

    return (
        <Switch>
            <Route 
                path='/' 
                exact
                component={MainPage} 
            />
            <Route 
                path='/submit-post' 
                exact 
                component={SubmitPostPage} 
            />
            <Route 
                path='/admin' 
                component={AdminPage}
            />
            <Route 
                path='/error' 
                exact 
                component={ErrorPage}
            />
            <Route 
                path='/login'
                exact
                component={LoginPage}
            />
            
            <Redirect 
                from='*' 
                to='/error' 
            />
        </Switch>
    )
}
