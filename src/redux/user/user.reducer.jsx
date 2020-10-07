// {
//     type: 
//     payload: //anything. can be value needed to set state, or use it to make some transformation in state
// }

//redux store passes current state, whenever an action fires

const INITIAL_STATE = {
    currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            };
        default:
            return state;
    }
}

export default userReducer;