import * as Actions from './actions';
import { Map, List, fromJS } from 'immutable';

const initialState = {
    customer: {
        list: List()
    }
}

export const CustomersReducer = (state, action) => {
    switch (action.type) {
        case Actions.FETCH_CUSTOMER:
            return {
                ...state,
                list: [...action.payload]
            }
        default:
            return state | initialState;
    }
}