import * as actionTypes from './actionTypes';

export const  updateUnpackedItemsFilter =  text => ({
	type: actionTypes.UPDATE_UNPACKED_ITEMS_FILTER,
	text
});

export const updatePackedItemsFilter = text => ({
	type: actionTypes.UPDATE_PACKED_ITEMS_FILTER,
	text
});