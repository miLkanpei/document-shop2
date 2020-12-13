export const GET_CUSTOMER = "GET_CUSTOMER";
export const fetchCustomerAction = customers => {
    return{
        type:"GET_CUSTOMER",
        payload: customers
    }
};
export const FORM_SAMPLE = 'FORM_SAMPLE';
export const getModalForm = (mail, password) => {
    return{
        type:"FORM_SAMPLE",
        payload: {
            mail: mail,
            password: password
        }
    }
};

export const TEST = "TEST";
export const test2 = () => {
  return{
    type: "TEST",
    payload: {
      isSignedIn: false
    }
  }
}