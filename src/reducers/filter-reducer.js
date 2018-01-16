import * as actionsTypes from '../actions/actionTypes';

const initialState = {
	unpackedFilter: '', packedFilter: ''
};

export default function (state = initialState, action ) {
	if (action.type === actionsTypes.UPDATE_PACKED_ITEMS_FILTER) {
		return {...state, packedFilter: action.text}
	}

	if (action.type === actionsTypes.UPDATE_UNPACKED_ITEMS_FILTER) {
		return {...state, unpackedFilter: action.text}
	}

	return state;
}