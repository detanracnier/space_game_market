export const addToInventory = (item) => {
    return {
        type: 'add_to_inventory',
        payload: item,
    }
}

export const removeFromInventory = (id) => {
    return {
        type: 'remove_from_inventory',
        payload: id,
    }
}

export const updateFunds = (cost) => {

    return {
        type: 'update_funds',
        payload: {
            cost
        }
    }
}

export const updateCrew = (crew) => {

    return {
        type: 'update_crew',
        payload: {
            crew
        }
    }
}

export const updateCrewCapacity = (crewCapacity) => {

    return {
        type: 'update_crew_capacity',
        payload: {
            crewCapacity
        }
    }
}

export const updatePower = (power) => {

    return {
        type: 'update_power',
        payload: {
            power
        }
    }
}

export const updatePowerCapacity = (powerCapacity) => {

    return {
        type: 'update_power_capacity',
        payload: {
            powerCapacity
        }
    }
}

export const updateAmmo = (ammoType, ammo) => {

    return {
        type: 'update_ammo',
        payload: {
            ammoType,
            ammo
        }
    }
}

export const collapseMenu = (menu) => {

    return {
        type: 'collapse_menu',
        payload: {
            menu
        }
    }
}

export const updateShip = (ship) => {
    return {
        type: 'update_ship',
        payload: {
            ship
        }
    }
}