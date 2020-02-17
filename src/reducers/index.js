import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './authReducer';
import callback from './callbackReducer';
import forgot from './forgotPasswordReducer';
import home from './homeReducer';
import password from './changePasswordReducer';

const rootReducer = combineReducers({
    form,
    auth,
    callback,
    forgot,
    home,
    password
});

export default rootReducer;
