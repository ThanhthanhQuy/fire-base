import React, {Component} from 'react'
// import {Switch, Route, Redirect} from 'react-router'
import {BrowserRouter,Switch, Route, } from 'react-router-dom'
import Login from '../Login/Login'
import Upload from '../upload/uploadFile'

class   MainApp extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route extract path={'/login'} render={() => <Login />} />
                    <Route extract path={'/upload'} render={() => <Upload />} />
                </Switch>
            </BrowserRouter>
        )

    }
}

export default MainApp