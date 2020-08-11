

const shipReducer = (state = {
    shipClass: '',
    shipName: '',
    armor: '',
    hull: '',
}, action) => {
    switch(action.type){
        case "SHIP_SELECTED":
            return{
                    ...state,
                    shipClass: action.payload.ship[0].class,
                    shipName: action.payload.ship[0].name,
                    armor: action.payload.ship[0].armor,
                    hull: action.payload.ship[0].hull,
            }
        default:
            return state;
    }
}
export default shipReducer;