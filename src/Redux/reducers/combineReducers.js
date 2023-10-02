import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import expenseReducer from './expenseReducer';
import filtersReducer from './filters.Reducer';

const rootReducer = combineReducers({
  Login: loginReducer,
  Expense: expenseReducer,
  Filters: filtersReducer,
});

export default rootReducer;
