const powerReducer = (state = {
    power: 0,
    powerCapacity: 0,
}, action) => {
    switch(action.type){
        case "MARKET_ITEM_CLICKED_REACTOR":
            return{
                ...state,
                powerCapacity: state.powerCapacity+action.payload.item.powerCapacity
            }
        case "INVENTORY_ITEM_CLICKED_REACTOR":
            return{
                ...state,
                powerCapacity: state.powerCapacity-action.payload.item.powerCapacity
            }
        case "MARKET_ITEM_CLICKED_ENGINE":
            return{
                ...state,
                power: state.power+action.payload.item.power
            }
        case "INVENTORY_ITEM_CLICKED_ENGINE":
            return{
                ...state,
                power: state.power-action.payload.item.power
            }
        case "MARKET_ITEM_CLICKED_WEAPON":
            return{
                ...state,
                power: state.power+action.payload.item.power
            }
        case "INVENTORY_ITEM_CLICKED_WEAPON":
            return{
                ...state,
                power: state.power-action.payload.item.power
            }
        case "MARKET_ITEM_CLICKED_EXTRA_CREW":
            return{
                ...state,
                power: state.power+action.payload.item.power
            }
        case "INVENTORY_ITEM_CLICKED_EXTRA_CREW":
            return{
                ...state,
                power: state.power-action.payload.item.power
            }
        default:
            return state;
    }
}

export default powerReducer;