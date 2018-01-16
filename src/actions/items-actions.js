import * as actionTypes from './actionTypes';
import uniqueId from 'lodash/uniqueId';

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