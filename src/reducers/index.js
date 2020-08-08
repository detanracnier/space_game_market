import shipInventoryReducer from './shipInventory';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    shipInventory: shipInventoryReducer,
})
export default allReducers