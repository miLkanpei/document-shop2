import * as Actions from './actions';
import initialState from '../../store/initialState';

export const UsersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case Actions.SIGN_IN:
      return {
        ...state,
        ...action.payload
      }
    case Actions.SIGN_OUT:
      return{
        ...state,
        ...action.payload
      }
      case Actions.TEST:
        alert('test22222222222');
        return{
          ...state,
          ...action.payload
        }
    default:
      return state
  }
}