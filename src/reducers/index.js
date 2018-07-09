import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import navReducer from './nav';

export default combineReducers({
	form: formReducer,
	nav: navReducer
});
