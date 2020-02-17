import {
    AUTH_ERROR,
    AUTH_IN_PROGRESS,
    AUTH_USER,
    CLEARDOWN,
    FORGOT_SUCCESS,
    UNAUTH_USER
} from './authTypes';

import Auth from './Auth';

const auth = new Auth();

export function signinUser(callback) {

    return function (dispatch) {
        dispatch({ type: AUTH_IN_PROGRESS });
        auth.signin();
    }
}

export function signoutUser() {

    return function (dispatch) {
        dispatch({ type: UNAUTH_USER });
    }
}

export function cleardown() {
    return {
        type: CLEARDOWN
    };
}