import shipInventoryReducer from './shipInventory';
import resourceTrackerReducer from './resourceTracker';
import marketReducer from './market';
import shipReducer from './ship';
import { combineReducers } from 'redux';
import AmmoReducer from './ammo';
import CrewReducer from './crew';
import FundsReducer from './funds';
import PowerReducer from './power';
import WeaponsReducer from './weapons';

const allReducers = combineReducers({
    shipInventory: shipInventoryReducer,
    resourceTracker: resourceTrackerReducer,
    market: marketReducer,
    ship: shipReducer,
    ammo: AmmoReducer,
    crew: CrewReducer,
    funds: FundsReducer,
    power: PowerReducer,
    weapons: WeaponsReducer
})

export default allReducers