let lastID = 0;

const shipInventoryReducer = (state = [], action) => {
    switch(action.type){
        case "add_to_inventory":
            return [
                ...state,
                {...action.payload, id: ++lastID}
            ]

        case "remove_from_inventory":
            return state.filter(item => item.id !== action.payload)

        default:
            return state;
    }
}
export default shipInventoryReducer;