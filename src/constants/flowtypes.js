import {
	FETCH_ARTICLES,
	FETCH_ARTICLE,
	FETCH_ARTICLE_FAILED,
	FREE_ARTICLE,
	TOGGLE_SEARCH_BOX,
	TOGGLE_MENU
} from './actionTypes';

/*
	Article Section
*/
export type Article = {
	category: Array<string>,
	comments: Array<{
		author: string,
		content: string,
		lastEdited: number
	}>,
	content: string,
	lastEdited: number,
	likes: Array<string>,
	title: string,
	writtenBy: string,
	_id: string
};

// FIXME: not ideal, don't want to use payload: void
// if I replace all constant variables with plain string --> no flow error
export type FetchArticleAction = {| type: FETCH_ARTICLES, payload: Array<Article> |};
export type FetchArticlesAction = {| type: FETCH_ARTICLE, payload: Article |};
export type FetchArticleFailedAction = {| type: FETCH_ARTICLE_FAILED, payload: string |};
export type FreeArticleAction = {| type: FREE_ARTICLE, payload: void |};

export type ArticleAction =
	| FetchArticleAction
	| FetchArticlesAction
	| FetchArticleFailedAction
	| FreeArticleAction;

/*
	Comment Section
*/
export type Comment = {
	author: Array<{
		username: string,
		_id: string
	}>,
	content: string,
	lastEdited: number
};

/* 
	Nav Section
*/
export type ToggleSearchBoxAction = {| type: TOGGLE_SEARCH_BOX |};
export type ToggleMenuAction = {| type: TOGGLE_MENU |};

export type NavAction =
	| ToggleSearchBoxAction
	| ToggleMenuAction;

export type Nav = {
	showSearchBox: boolean,
	showMenu: boolean
};
