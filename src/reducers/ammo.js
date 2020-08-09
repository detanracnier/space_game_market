
const initialState = {

};

const AmmoReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'REACTOR_ITEM_CLICKED':
            if(action.payload.ammoType === 'nuke') {

            }
            return state;
        default: 
            return state;
    }
}

export default AmmoReducer;