
const initialState = {
    shipClass: '',
    shipName: '',
    armor: '',
    hull: '',
};

const shipReducer = (state = initialState, action) => {
    switch(action.type){
        case "update_ship":
            state.ship = action.payload.ship
            return state;
        default:
            return state;
    }
}

export default shipReducer;