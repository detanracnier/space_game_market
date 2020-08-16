const ammoReducer = (state = {
		nuke: 0,
		shiptoship: 0,
		rocket: 0,
		torpedo: 0,
		none: 0
}, action) => {
	switch(action.type){
		case "MARKET_ITEM_CLICKED_WEAPON":
			return{
				...state,
				[action.payload.item.ammo_type]: state[action.payload.item.ammo_type] + action.payload.item.ammo_amount
			}
		case "MARKET_ITEM_CLICKED_EXTRA_AMMO":
			return{
				...state,
				[action.payload.item.ammo_type]: state[action.payload.item.ammo_type] + action.payload.item.ammo_amount
			}
		case "INVENTORY_ITEM_CLICKED_WEAPON":
			return{
				...state,
				[action.payload.item.ammo_type]: state[action.payload.item.ammo_type] - action.payload.item.ammo_amount
			}
		case "INVENTORY_ITEM_CLICKED_EXTRA_AMMO":
			return{
				...state,
				[action.payload.item.ammo_type]: state[action.payload.item.ammo_type] - action.payload.item.ammo_amount
			}
		default:
			return state;
	}
}

export default ammoReducer;