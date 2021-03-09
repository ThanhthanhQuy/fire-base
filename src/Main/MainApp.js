import React, {Component} from 'react'
// import {Switch, Route, Redirect} from 'react-router'
import {BrowserRouter,Switch, Route, } from 'react-router-dom'
import Login from '../Login/Login'

class   MainApp extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route extract path={'/login'} render={() => <Login />} />
                </Switch>
            </BrowserRouter>
        )

    }
}

export default MainApp