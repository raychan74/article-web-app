// @flow
import {
	FETCH_ARTICLES,
	FETCH_ARTICLE,
	FETCH_ARTICLE_FAILED,
	FREE_ARTICLE
} from '../constants/actionTypes';
import type { Article, ArticleAction } from '../constants/flowTypes';

type State = {
	fetchedArticles: Array<Article>,
	fetchedArticle: Article,
	errorMessage: string
};

const INITIAL_STATE: State = {
	fetchedArticles: [],
	fetchedArticle: {},
	errorMessage: ''
};

export default function (state: State = INITIAL_STATE, action: ArticleAction) {
	switch (action.type) {
	case FETCH_ARTICLES:
		return { ...state, fetchedArticles: action.payload };
	case FETCH_ARTICLE:
		return { ...state, fetchedArticle: action.payload };
	case FETCH_ARTICLE_FAILED:
		return { ...state, errorMessage: action.payload };
	case FREE_ARTICLE:
		return { ...state, fetchedArticle: {} };
	default:
		return state;
	}
}
