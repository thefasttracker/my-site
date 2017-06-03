import { combineReducers } from 'redux';
import { commentReducer, loginReducer, authReducer } from '../reducers/reducers';
import { routerReducer } from 'react-router-redux'


export default combineReducers({
	routing: routerReducer,
    commentReducer,
    loginReducer,
    auth: authReducer
});