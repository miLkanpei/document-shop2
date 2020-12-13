import {createSelector} from "reselect";

const customersSelector = state => state.customers;

export const getCustomersLists = createSelector(
    [customersSelector],
    state => state
)