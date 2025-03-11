import { combineReducers } from 'redux';

// Example reducer
const initialState = {
    count: 0,
};

const counterReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 };
        case 'DECREMENT':
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
};

// Combine all reducers
const rootReducer = combineReducers({
    counter: counterReducer,
    // Add other reducers here
});

export default rootReducer;