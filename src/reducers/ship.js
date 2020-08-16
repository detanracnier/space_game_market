

const shipReducer = (state = {
    shipClass: '',
    shipName: '',
    armor: '',
    hull: '',
    crewCapacity: '',
    image: {},
}, action) => {
    switch(action.type){
        case "SHIP_SELECTED":
            return{
                    ...state,
                    shipClass: action.payload.ship.class,
                    shipName: action.payload.ship.name,
                    armor: action.payload.ship.armor,
                    hull: action.payload.ship.hull,
                    crewCapacity: action.payload.ship.crewCapacity,
                    image: action.payload.image,
            }
        default:
            return state;
    }
}
export default shipReducer;