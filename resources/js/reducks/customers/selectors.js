import {createSelector} from 'reselect';

const customerSelector = state => state.customer;

export const getCustomer = createSelector(
    [customerSelector],
    state => state.list
)