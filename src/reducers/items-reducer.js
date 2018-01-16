import * as actionsTypes from '../actions/actionTypes';

const initialState = {

};

export default function (state = initialState, action ) {
	if (action.type === actionsTypes.ADD_ITEM) {
		const item = action.item;
		return [...state,  item ];
	}


	if (action.type === actionsTypes.REMOVE_ITEM) {
		return state.filter( item =>  item.id !== action.id);
	}

	if (action.type === actionsTypes.TOGGLE_ITEM) {
		return state.map( item => {
			if (item.id === action.id) {
				return {...item, packed: !item.packed}
			}
			return item;
		});
	}


	return state;
}