const fundsReducer = (state = {
    funds: 2300,
    shipCost: 0,
}, action) => {
    switch(action.type){
        case "SHIP_SELECTED":
            return{
                ...state,
                funds: state.funds - (action.payload.ship.cost - state.shipCost),
                shipCost: action.payload.ship.cost,
            }
        case "MARKET_ITEM_CLICKED_REACTOR":
            return{
                ...state,
                funds: state.funds - action.payload.item.cost
            }
        case "INVENTORY_ITEM_CLICKED_REACTOR":
            return{
                ...state,
                funds: state.funds + action.payload.item.cost
            }
        case "MARKET_ITEM_CLICKED_ENGINE":
            return{
                ...state,
                funds: state.funds - action.payload.item.cost
            }
        case "INVENTORY_ITEM_CLICKED_ENGINE":
            return{
                ...state,
                funds: state.funds + action.payload.item.cost
            }
        case "MARKET_ITEM_CLICKED_WEAPON":
            return{
                ...state,
                funds: state.funds - action.payload.item.cost
            }
        case "INVENTORY_ITEM_CLICKED_WEAPON":
            return{
                ...state,
                funds: state.funds + action.payload.item.cost
            }
        case "MARKET_ITEM_CLICKED_EXTRA_CREW":
            return{
                ...state,
                funds: state.funds - action.payload.item.cost
            }
        case "INVENTORY_ITEM_CLICKED_EXTRA_CREW":
            return{
                ...state,
                funds: state.funds + action.payload.item.cost
            }
        case "MARKET_ITEM_CLICKED_EXTRA_AMMO":
            return{
                ...state,
                funds: state.funds - action.payload.item.cost
            }
        case "INVENTORY_ITEM_CLICKED_EXTRA_AMMO":
            return{
                ...state,
                funds: state.funds + action.payload.item.cost
            }
        default:
            return state;
    }
}

export default fundsReducer;