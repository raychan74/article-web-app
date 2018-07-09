import { TOGGLE_SEARCH_BOX, TOGGLE_MENU } from '../constants/actionTypes';

export const toggleSearchBox = () => {
	return {
		type: TOGGLE_SEARCH_BOX	
	};
};

export const toggleMenu = () => {
	return {
		type: TOGGLE_MENU
	};
};
