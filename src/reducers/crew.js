const crewReducer = (state = {
    crew: 0,
    crewCapacity: 0,
    shipCrewCapacity: 0,
}, action) => {
    switch(action.type){
        case "SHIP_SELECTED":
            return{
                ...state,
                crewCapacity: state.crewCapacity + (action.payload.ship.crewCapacity - state.shipCrewCapacity),
                shipCrewCapacity: action.payload.ship.crewCapacity,
            }
        case "MARKET_ITEM_CLICKED_REACTOR":
            return{
                ...state,
                crew: state.crew + action.payload.item.crew
            }
        case "INVENTORY_ITEM_CLICKED_REACTOR":
            return{
                ...state,
                crew: state.crew - action.payload.item.crew
            }
        case "MARKET_ITEM_CLICKED_ENGINE":
            return{
                ...state,
                crew: state.crew + action.payload.item.crew
            }
        case "INVENTORY_ITEM_CLICKED_ENGINE":
            return{
                ...state,
                crew: state.crew - action.payload.item.crew
            }
        case "MARKET_ITEM_CLICKED_WEAPON":
            return{
                ...state,
                crew: state.crew + action.payload.item.crew
            }
        case "INVENTORY_ITEM_CLICKED_WEAPON":
            return{
                ...state,
                crew: state.crew - action.payload.item.crew
            }
        case "MARKET_ITEM_CLICKED_EXTRA_CREW":
            return{
                ...state,
                crewCapacity: state.crewCapacity + action.payload.item.crewCapacity
            }
        case "INVENTORY_ITEM_CLICKED_EXTRA_CREW":
            return{
                ...state,
                crewCapacity: state.crewCapacity - action.payload.item.crewCapacity
            }

        default:
            return state;
    }
}

export default crewReducer;