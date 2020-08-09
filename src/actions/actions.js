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

export const updateResources = (cost,crew,power) => {
    return {
        type: 'update_resources',
        payload: {
            cost,
            crew,
            power,
        }
    }
}