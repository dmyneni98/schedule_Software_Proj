import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import ForgetPasswordPage from './components/ForgetPasswordPage'
import HomePage from './components/HomePage'
import TaskList from './components/TaskList'
import Calendar from './components/Calendar'
import AddTask from './components/AddTask'
import './App.css';
function App() {
  return (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={ LandingPage } />
                <Route path="/login" component={ LoginPage } />
                <Route path="/register" component={ RegisterPage } />
                <Route path="/forget-password" component={ ForgetPasswordPage } />
                <Route path="/home" component={ HomePage } />
                <Route path="/calendar" component={ Calendar } />
                <Route path="/tasklist" component={ TaskList } />
                <Route path="/TaskCreate" component={ AddTask } />
            </Switch>
            
        </div>
    </Router>
)
}

export default App;
