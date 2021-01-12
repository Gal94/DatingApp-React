import * as actionTypes from '../actionTypes';

const initialState = {
    username: null,
    token: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return {
                ...state,
                username: action.username,
                token: action.token,
            };
        case actionTypes.LOGOUT:
            return {
                ...state,
                username: null,
                token: null,
            };

        default:
            return {
                ...state,
            };
    }
};

export default reducer;
