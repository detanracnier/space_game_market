const marketReducer = (state = {
    reactorsCollapse: true,
    enginesCollapse: true,
    weaponsCollapse: true,
    extrasCollapse: true,
}, action) => {
    switch(action.type){
        case "collapse_menu":

            return{
                    ...state,
                    [action.payload.menu]: !state[action.payload.menu],
            }

        default:
            return state;
    }
}
export default marketReducer;