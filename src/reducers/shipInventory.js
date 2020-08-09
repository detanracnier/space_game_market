let lastID = 0;

const initialState = [];

const shipInventoryReducer = (state = initialState, action) => {
    switch(action.type){
        case "add_to_inventory":
            ++lastID;
            state.id = lastID;
            return state;
        case "remove_from_inventory":
            state = state.filter(item => item.id !== action.payload)
            return state;
        default:
            return state
    }
}
export default shipInventoryReducer;