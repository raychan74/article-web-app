import { TOGGLE_SEARCH_BOX, TOGGLE_MENU } from '../constants/actionTypes';

import type {
	ToggleSearchBoxAction,
	ToggleMenuAction
} from '../constants/flowTypes';

export const toggleSearchBox = (): ToggleSearchBoxAction => {
	return {
		type: TOGGLE_SEARCH_BOX	
	};
};

export const toggleMenu = (): ToggleMenuAction => {
	return {
		type: TOGGLE_MENU
	};
};
