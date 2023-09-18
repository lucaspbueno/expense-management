import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import expenseReducer from './expenseReducer';

const rootReducer = combineReducers({
  Login: loginReducer,
  Expense: expenseReducer,
});

export default rootReducer;
