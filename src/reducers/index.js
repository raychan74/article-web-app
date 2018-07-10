import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import navReducer from './nav';
import articlesReducer from './articles';

export default combineReducers({
	form: formReducer,
	nav: navReducer,
	articles: articlesReducer
});
