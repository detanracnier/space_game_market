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