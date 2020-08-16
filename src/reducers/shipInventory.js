let lastID = 0;

const shipInventoryReducer = (state = [], action) => {
    switch(action.type){
/*--------------------------------------------
----------------Market actions-----------------
-----------------------------------------------*/
        case "MARKET_ITEM_CLICKED_REACTOR":
            return [
                ...state,
                {...action.payload.item, id: ++lastID}
            ]
        case "MARKET_ITEM_CLICKED_ENGINE":
            return [
                ...state,
                {...action.payload.item, id: ++lastID}
            ]
        case "MARKET_ITEM_CLICKED_WEAPON":
            return [
                ...state,
                {...action.payload.item, id: ++lastID}
            ]
        case "MARKET_ITEM_CLICKED_EXTRA_CREW":
            return [
                ...state,
                {...action.payload.item, id: ++lastID}
            ]
        case "MARKET_ITEM_CLICKED_EXTRA_AMMO":
        return [
                ...state,
                {...action.payload.item, id: ++lastID}
            ]
/*-----------------------------------------------
----------------Inventory actions-----------------
-----------------------------------------------*/
        case "INVENTORY_ITEM_CLICKED_REACTOR":
            return state.filter(item => item.id !== action.payload.item.id)
        case "INVENTORY_ITEM_CLICKED_ENGINE":
            return (
                state.filter(item => item.id !== action.payload.item.id)
            )
        case "INVENTORY_ITEM_CLICKED_WEAPON":
            return (
                state.filter(item => item.id !== action.payload.item.id)
            )
        case "INVENTORY_ITEM_CLICKED_EXTRA_CREW":
            return (
                state.filter(item => item.id !== action.payload.item.id)
            )
        case "INVENTORY_ITEM_CLICKED_EXTRA_AMMO":
            return (
                state.filter(item => item.id !== action.payload.item.id)
            )

        default:
            return state;
    }
}
export default shipInventoryReducer;