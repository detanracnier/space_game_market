
const initialState = {
    reactorsCollapse: true,
    enginesCollapse: true,
    weaponsCollapse: true,
    extrasCollapse: true
}

const MarketReducer = (state = initialState, action) => {
    switch(action.type){
        case "collapse_menu":
            state.menu = !state.menu;
            return state;
        default: 
            return state;
    }
}

export default MarketReducer;