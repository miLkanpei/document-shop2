import * as Actions from './actions';
import initialState from '../../store/initialState';
import { Map, fromJS } from 'immutable';

export const TestCustomerReducer = (state = initialState.testCustomers, action) => {

    switch (action.type) {
        case Actions.FORM_SAMPLE:
            alert('aa');
            return {
                ...state,
                ...action.payload
            }
        case Actions.GET_CUSTOMER:
            return {
                ...state,
                list: [fromJS(...action.payload)]
            }
        default:
            return state
    }
}