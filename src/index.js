import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import Main from './components/Main';
import Article from './components/Article';
import rootReducer from './reducers';

const store = createStore(rootReducer, {}, applyMiddleware(logger, reduxThunk));

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App>
				<Route exact path='/' component={Main} />
				<Route exact path='/article/:id' component={Article} />
			</App>
		</Provider>
	</BrowserRouter>,
	document.querySelector('#root')
);
