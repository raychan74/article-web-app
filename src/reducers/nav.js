import { TOGGLE_SEARCH_BOX, TOGGLE_MENU } from '../constants/actionTypes';

const INITIAL_STATE = {
	showSearchBox: false,
	showMenu: false
};

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
	case TOGGLE_SEARCH_BOX:
		return { ...state, showSearchBox: !state.showSearchBox };
	case TOGGLE_MENU:
		return { ...state, showMenu: !state.showMenu };
	default:
		return state;
	}
}
