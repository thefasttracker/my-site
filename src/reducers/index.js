import { combineReducers } from 'redux';
import { commentReducer} from '../reducers/reducers';
import { routerReducer } from 'react-router-redux'


export default combineReducers({
	routing: routerReducer,
    commentReducer
});