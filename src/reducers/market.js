const marketReducer = (state = {
    reactorsCollapse: true,
    enginesCollapse: true,
    weaponsCollapse: true,
    extrasCollapse: true,
}, action) => {
    switch(action.type){
        case "update_funds":
            return{
                    ...state,
                    funds: state.funds-action.payload.cost
            }


        default:
            return state;
    }
}
export default marketReducer;