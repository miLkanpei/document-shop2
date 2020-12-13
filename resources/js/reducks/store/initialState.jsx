import { Map, List, fromJS } from 'immutable';

const initialState = {
  products:{

  },
  users: {
    isSignedIn: false,
    uid: "",
    username: ""
  },
  testCustomers: {
    list: List(),
    mail: "",
    password: "",
  },
  customer: {
    list: List()
  }
};

export default initialState;