
const initialState = {
    crew: [],
    crewCapacity: 0
};

const CrewReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'REACTOR_ITEM_CLICKED': 
            state.crew.push(action.payload.crew)
            return state;
        default:
            return state;
    }
};

export default CrewReducer;