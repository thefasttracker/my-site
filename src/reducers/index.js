import { combineReducers } from 'redux';
import { commentReducer, loginReducer } from '../reducers/reducers';
import { routerReducer } from 'react-router-redux'


export default combineReducers({
	routing: routerReducer,
    commentReducer,
    loginReducer
});