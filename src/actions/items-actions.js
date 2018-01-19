import * as actionTypes from './actionTypes';
import uniqueId from 'lodash/uniqueId';
import {getAllItems} from '../reducers/items-reducer';
export const addItem = value => ({
	type: actionTypes.ADD_ITEM,
	item: {
		id: uniqueId(),
		packed: false,
		value
	}
});


export const removeItem = id => ({
	type: actionTypes.REMOVE_ITEM,
	id
});


export const toggleItem = id => ({
	type: actionTypes.TOGGLE_ITEM,
	id
});


export const markAllAsUnpacked = () => ({
	type: actionTypes.MARK_ALL_AS_UNPACKED
});


export const getItems = () => {
	return dispatch => {
		setTimeout( () => {
			dispatch({
				type: actionTypes.GET_ITEMS,
				items: getAllItems()
			})
		}, 3000);
	}
};