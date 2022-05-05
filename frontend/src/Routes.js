import React from 'react';
import { Route } from 'react-router-dom';

import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import ForgetPasswordPage from './components/ForgetPasswordPage'
import HomePage from './components/HomePage'
import TaskList from './components/TaskList'
import Calendar from './components/Calendar'
import AddTask from './components/AddTask

const BaseRouter = () => (
    <div>
                <Route exact path="/" component={ LandingPage } />
                <Route exact path="/login" component={ LoginPage } />
                <Route exact path="/register" component={ RegisterPage } />
                <Route exact path="/forget-password" component={ ForgetPasswordPage } />
                <Route exact path="/home" component={ HomePage } />
                <Route exact path="/calendar" component={ Calendar } />
                <Route exact path="/tasklist" component={ TaskList } />
                <Route exact path="/TaskCreate" component={ AddTask } />
    </div>
);

export default BaseRouter;