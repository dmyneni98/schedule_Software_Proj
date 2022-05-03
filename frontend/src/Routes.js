import React from 'react';
import { Route } from 'react-router-dom';

import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import ForgetPasswordPage from './components/ForgetPasswordPage'
import HomePage from './components/HomePage'
import Calendar from './components/Calendar'
import TaskList from './components/TaskList'

const BaseRouter = () => (
    <div>
        <Route path="/login" component={ LoginPage } />
        <Route path="/register" component={ RegisterPage } />
        <Route path="/forget-password" component={ ForgetPasswordPage } />
        <Route path="/home" component={ HomePage } />
        <Route path="/Calendar" component={ Calendar } />
        <Route path="/TaskList" component={ TaskList } />
    </div>
);

export default BaseRouter;