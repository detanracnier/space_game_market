import shipInventoryReducer from './shipInventory';
import resourceTrackerReducer from './resourceTracker';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    shipInventory: shipInventoryReducer,
    resourceTracker: resourceTrackerReducer,
})
export default allReducers