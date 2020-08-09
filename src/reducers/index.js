import shipInventoryReducer from './shipInventory';
import resourceTrackerReducer from './resourceTracker';
import marketReducer from './market';
import shipReducer from './ship';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    shipInventory: shipInventoryReducer,
    resourceTracker: resourceTrackerReducer,
    market: marketReducer,
    ship: shipReducer,
})
export default allReducers