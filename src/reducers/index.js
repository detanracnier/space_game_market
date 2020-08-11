import ammoReducer from './ammo';
import crewReducer from './crew';
import fundsReducer from './funds';
import powerReducer from './power';
import shipInventoryReducer from './shipInventory';
import marketReducer from './market';
import shipReducer from './ship';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    ammo: ammoReducer,
    crew: crewReducer,
    funds: fundsReducer,
    power: powerReducer,
    shipInventory: shipInventoryReducer,
    market: marketReducer,
    ship: shipReducer,
})
export default allReducers