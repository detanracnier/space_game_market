import shipInventoryReducer from './shipInventory';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

const allReducers = combineReducers({
    shipInventory: shipInventoryReducer,
})
export default allReducers