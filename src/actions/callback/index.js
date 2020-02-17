import {
    CLEARDOWN,
    CALLBACK_COMPLETE,
    CALLBACK_IN_PROGRESS
} from './callbackTypes';

import {
    UNAUTH_USER,
    AUTH_USER,
    AUTH_ERROR
} from '../auth/authTypes';

import Auth from '../auth/Auth';
import params from '../../utils/auth0/auth0-params';

const auth = new Auth();

export function signoutUser() {

    auth.signout();
    return { type: UNAUTH_USER };
}

export function cleardown() {
    return {
        type: CLEARDOWN
    };
}

export function loading() {
    return function (dispatch) {
        dispatch({ type: CALLBACK_IN_PROGRESS });
    }
}

export function handleAuthentication(callback) {
    return function (dispatch) {
        auth.handleAuthentication()
            .then(() => {
                dispatch({ type: AUTH_USER });
                dispatch({ type: CALLBACK_COMPLETE });
                return callback();
            })
            .catch(err => {
                dispatch({ type: UNAUTH_USER });
                setTimeout(() => {
                    const timestamp = Date.now();
                    const error = `Error: ${err.error}, Error Description: ${err.errorDescription}`;
                    dispatch({
                        type: AUTH_ERROR,
                        error,
                        timestamp
                    }, 1000);
                })
                return callback(err);
            });
    }
}