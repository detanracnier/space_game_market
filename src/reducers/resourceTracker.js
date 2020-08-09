const resourceTrackerReducer = (state = {
    funds: 1600,
    shipClass: 'frigate',
    shipName: 'pirate',
    power: 0,
    powerCapacity: 0,
    crew: 0,
    crewCapacity: 110,
}, action) => {
    switch(action.type){
        case "update_funds":
            return{
                    ...state,
                    funds: state.funds-action.payload.cost
            }
        case "update_crew":
            return{
                ...state,
                crew: state.crew+action.payload.crew
        }
        case "update_power":
            return{
                ...state,
                power: state.power+action.payload.power
        }
        case "update_power_capacity":
            return{
                ...state,
                powerCapacity: state.powerCapacity+action.payload.powerCapacity
        }

        default:
            return state;
    }
}
export default resourceTrackerReducer;