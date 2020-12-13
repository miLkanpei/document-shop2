export const FETCH_CUSTOMER = "FETCH_CUSTOMER";
export const fetchCustomers = customers => {
    return{
        type:"FETCH_CUSTOMER",
        payload: customers
    }
}