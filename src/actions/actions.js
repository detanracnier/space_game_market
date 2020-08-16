export const marketItemClicked = (item) => {
    switch(item.type){
        case "reactor":
            return {
                type: 'MARKET_ITEM_CLICKED_REACTOR',
                payload: {
                    item,
                }
            }
        case "engine":
            return {
                type: 'MARKET_ITEM_CLICKED_ENGINE',
                payload: {
                    item,
                }
            }
            case "weapon":
        return {
            type: 'MARKET_ITEM_CLICKED_WEAPON',
            payload: {
                item,
            }
        }
        case "extra crew":
        return {
            type: 'MARKET_ITEM_CLICKED_EXTRA_CREW',
            payload: {
                item,
            }
        }
        case "extra ammo":
        return {
            type: 'MARKET_ITEM_CLICKED_EXTRA_AMMO',
            payload: {
                item,
            }
        }
        default:
            return {
                type: 'failsafe'
            }
    }
}

export const inventoryItemClicked = (item) => {
    switch(item.type){
        case "reactor":
            return {
                type: 'INVENTORY_ITEM_CLICKED_REACTOR',
                payload: {
                    item,
                }
            }
        case "engine":
            return {
                type: 'INVENTORY_ITEM_CLICKED_ENGINE',
                payload: {
                    item,
                }
            }
            case "weapon":
        return {
            type: 'INVENTORY_ITEM_CLICKED_WEAPON',
            payload: {
                item,
            }
        }
        case "extra crew":
        return {
            type: 'INVENTORY_ITEM_CLICKED_EXTRA_CREW',
            payload: {
                item,
            }
        }
        case "extra ammo":
        return {
            type: 'INVENTORY_ITEM_CLICKED_EXTRA_AMMO',
            payload: {
                item,
            }
        }
        default:
            return {
                type: 'failsafe'
            }
    }
}

export const shipSelected = (ship, image) => {
    return {
        type: "SHIP_SELECTED",
        payload: {
            ship,
            image,
        }
    }
}

export const marketCollectionHeaderClicked = (id) => {
    const menu = id + "Collection";

    return {
        type: "MARKET_HEADER_CLICKED",
        payload: {
            menu,
        }
    }
}