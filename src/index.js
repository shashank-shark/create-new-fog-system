import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

import App from './app/App';
import Signin from './components/auth/Signin';
import Home from './components/home/Home';
import Callback from "./components/callback/Callback";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ForgotPassword from "./components/forgot/ForgotPassword";
import RequireAuth from './components/auth/requireAuth';
import ChangePassword from "./components/password/ChangePassword";


import reducers from "./reducers";

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(reduxThunk)
));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Switch>
                    <Route exact path='/' component={Signin}/>
                    <Route exact path='/forgot' component={ForgotPassword}/>
                    <Route exact path='/callback' component={Callback}/>
                    <Route exact path='/home' component={RequireAuth(Home)}/>
                    <Route exact path='/password' component={RequireAuth(ChangePassword)}/>
                </Switch>
            </App>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);