const resourceTrackerReducer = (state = {
    funds: 1600,
    shipClass: 'frigate',
    shipName: 'Pirate Ship',
    power: 0,
    powerCapacity: 0,
    crew: 0,
    crewCapacity: 110,
    ammo_nuke: 0,
    ammo_ship_to_ship: 0,
    ammo_rocket: 0,
    ammo_torpedo: 0,
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
        case "update_crew_capacity":
            return{
                ...state,
                crewCapacity: state.crewCapacity+action.payload.crewCapacity
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
        case "update_ammo":
            switch(action.payload.ammoType){
                case "nuke":
                    return{
                        ...state,
                        ammo_nuke: state.ammo_nuke+action.payload.ammo
                    }
                case "ship_to_ship":
                    return{
                        ...state,
                        ammo_ship_to_ship: state.ammo_ship_to_ship+action.payload.ammo
                    }
                case "rocket":
                    return{
                        ...state,
                        ammo_rocket: state.ammo_rocket+action.payload.ammo
                    }
                case "torpedo":
                    return{
                        ...state,
                        ammo_torpedo: state.ammo_torpedo+action.payload.ammo
                    }
                default:
                    return state;
            }

        default:
            return state;
    }
}
export default resourceTrackerReducer;