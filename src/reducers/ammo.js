const ammoReducer = (state = {
    ammo_nuke: 0,
    ammo_shiptoship: 0,
    ammo_torpedo: 0,
    ammo_rocket: 0,
}, action) => {
    switch(action.type){
        case "MARKET_ITEM_CLICKED_WEAPON":
            return{
                ammo_nuke: state.ammo_nuke+action.payload.item.ammo_nuke,
                ammo_shiptoship: state.ammo_shiptoship+action.payload.item.ammo_shiptoship,
                ammo_torpedo: state.ammo_torpedo+action.payload.item.ammo_torpedo,
                ammo_rocket: state.ammo_rocket+action.payload.item.ammo_rocket,
            }
        case "INVENTORY_ITEM_CLICKED_WEAPON":
            return{
                ammo_nuke: state.ammo_nuke-action.payload.item.ammo_nuke,
                ammo_shiptoship: state.ammo_shiptoship-action.payload.item.ammo_shiptoship,
                ammo_torpedo: state.ammo_torpedo-action.payload.item.ammo_torpedo,
                ammo_rocket: state.ammo_rocket-action.payload.item.ammo_rocket,
            }
        case "MARKET_ITEM_CLICKED_EXTRA_AMMO":
            return{
                ammo_nuke: state.ammo_nuke+action.payload.item.ammo_nuke,
                ammo_shiptoship: state.ammo_shiptoship+action.payload.item.ammo_shiptoship,
                ammo_torpedo: state.ammo_torpedo+action.payload.item.ammo_torpedo,
                ammo_rocket: state.ammo_rocket+action.payload.item.ammo_rocket,
            }
        case "INVENTORY_ITEM_CLICKED_EXTRA_AMMO":
            return{
                ammo_nuke: state.ammo_nuke-action.payload.item.ammo_nuke,
                ammo_shiptoship: state.ammo_shiptoship-action.payload.item.ammo_shiptoship,
                ammo_torpedo: state.ammo_torpedo-action.payload.item.ammo_torpedo,
                ammo_rocket: state.ammo_rocket-action.payload.item.ammo_rocket,
            }
        default:
            return state;
    }
}

export default ammoReducer;