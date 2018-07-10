// @flow
import axios from 'axios';

import {
	FETCH_ARTICLES,
	FETCH_ARTICLE,
	FETCH_ARTICLE_FAILED,
	FREE_ARTICLE
} from '../constants/actionTypes';

import {
	FreeArticleAction,
	FetchArticleAction,
	FetchArticlesAction,
	FetchArticleFailedAction
} from '../constants/flowTypes';

type fetchArticlesDispatch = (action: FetchArticlesAction | FetchArticleFailedAction ) => any;
type fetchArticleDispatch = (action: FetchArticleAction | FetchArticleFailedAction ) => any;

const baseUrl = 'http://localhost:3000/api/article';

export const fetchArticles = () => async (dispatch: fetchArticlesDispatch) => {
	try {
		const request = await axios.get(baseUrl);

		dispatch({ type: FETCH_ARTICLES, payload: request.data });
	} catch (err) {
		dispatch({ type: FETCH_ARTICLE_FAILED, payload: 'Failed in fetching articles' });
	}
};

export const fetchArticle = (id: string) => async (dispatch: fetchArticleDispatch) => {
	try {
		const request = await axios.get(`${baseUrl}/${id}`);

		dispatch({ type: FETCH_ARTICLE, payload: request.data });
	} catch (err) {
		dispatch({ type: FETCH_ARTICLE_FAILED, payload: 'Failed in fetching article' });
	}
};

export const freeArticle = (): FreeArticleAction => {
	return { type: FREE_ARTICLE };
};
