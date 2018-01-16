import {combineReducers} from 'redux';

import filter from './filter-reducer';
import items from './items-reducer';


export default combineReducers({
	filter, items
});