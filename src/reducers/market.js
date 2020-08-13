const marketReducer = (state = {
    reactorCollection: false,
    engineCollection: false,
    weaponCollection: false,
    extraCollection: false,
}, action) => {
    switch(action.type){
        case "MARKET_HEADER_CLICKED":

            return{
                    ...state,
                    [action.payload.menu]: !state[action.payload.menu],
            }

        default:
            return state;
    }
}
export default marketReducer;