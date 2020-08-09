
const initialState = {
    amount: 0
};

const PowerReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'REACTOR_ITEM_CLICKED':
            state.amount = state.amount + action.payload.power;
            return state;
        default: 
            return state;
    }
};

export default PowerReducer;