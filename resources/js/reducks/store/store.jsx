import {
  createStore as reduxCreateStore,
	combineReducers,
	applyMiddleware
} from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import {RootReducer} from '../root/reducers';
import {CustomersReducer} from '../customers/reducers';

import {UsersReducer} from '../sample/users/reducers';
import {TestCustomerReducer} from '../sample/customers/reducers';

export default function createStore(history){
	return reduxCreateStore(
		combineReducers({
			router: connectRouter(history),
			root: RootReducer,
			customer: CustomersReducer,
			testUsers: UsersReducer,
			test_customer: TestCustomerReducer
		}),
		composeWithDevTools(
			applyMiddleware(routerMiddleware(history), thunk)
		)
	);
}