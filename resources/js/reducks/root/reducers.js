import * as Actions from './actions';

const initialState = {
    sample: {
        data: 1
    }
}

export const RootReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state | initialState;
    }
}