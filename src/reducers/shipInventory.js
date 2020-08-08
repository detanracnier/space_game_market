const shipInventoryReducer = (state = [], action) => {
    switch(action.type){
        case "add_to_inventory":
            return (
                [
                    ...state,
                    {items: action.payload.item}
                ]
            )
        case "remove_from_inventory":
            return (
                state
            )
        default:
            return state;
    }
}
export default shipInventoryReducer;