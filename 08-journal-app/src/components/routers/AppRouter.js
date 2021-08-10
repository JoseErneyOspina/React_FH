import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { AuthRouter } from './AuthRouter';
import { JournalApp } from './../../JournalApp';



export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>

                    <Route
                        path='/auth'
                        component={ AuthRouter }
                    />

                    <Route
                        exact
                        path='/'
                        component={ JournalApp }
                    />

                    <Redirect to='/auth/login' />

                </Switch>
            </div>
        </Router>
    )
}
