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