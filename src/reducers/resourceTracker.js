const resourceTrackerReducer = (state = {
    funds: 1600,
    shipClass: 'frigate',
    shipName: 'pirate',
    power: 0,
    crew: 110,
}, action) => {
    switch(action.type){
        case "update_resources":
            return{
                    ...state,
                    funds: state.funds-action.payload.cost
            }

        default:
            return state;
    }
}
export default resourceTrackerReducer;