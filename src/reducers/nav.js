// @flow
import { TOGGLE_SEARCH_BOX, TOGGLE_MENU } from '../constants/actionTypes';

type Nav = {
	+showSearchBox: boolean,
	+showMenu: boolean
};

type Action = { type: string };

const INITIAL_STATE: Nav = {
	showSearchBox: false,
	showMenu: false
};

export default function (state: Nav = INITIAL_STATE, action: Action) {
	switch (action.type) {
	case TOGGLE_SEARCH_BOX:
		return { ...state, showSearchBox: !state.showSearchBox };
	case TOGGLE_MENU:
		return { ...state, showMenu: !state.showMenu };
	default:
		return state;
	}
}
