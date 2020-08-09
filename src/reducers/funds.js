
const initialState = {
    walletAmount: 0
};

const FundsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'REACTOR_ITEM_CLICKED':
            state.walletAmount = state.walletAmount - action.payload.cost;
            return state;
        default:
            return state;
    }
};

export default FundsReducer;