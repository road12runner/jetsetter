import * as actionsTypes from '../actions/actionTypes';
import uniqueId from 'lodash/uniqueId';

const initialState =  [
	{ value: 'Pants', id: uniqueId(), packed: false },
	{ value: 'Jacket', id: uniqueId(), packed: false },
	{ value: 'iPhone Charger', id: uniqueId(), packed: false },
	{ value: 'MacBook', id: uniqueId(), packed: false },
	{ value: 'Sleeping Pills', id: uniqueId(), packed: true },
	{ value: 'Underwear', id: uniqueId(), packed: false },
	{ value: 'Hat', id: uniqueId(), packed: false },
	{ value: 'T-Shirts', id: uniqueId(), packed: false },
	{ value: 'Belt', id: uniqueId(), packed: false },
	{ value: 'Passport', id: uniqueId(), packed: true },
	{ value: 'Sandwich', id: uniqueId(), packed: true },
];

export function getAllItems() {
	return initialState;
}

export default function (state = [], action ) {
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
	if (action.type === actionsTypes.GET_ITEMS) {
		return [...action.items];
	}


	return state;
}