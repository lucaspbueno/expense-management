const {
  TOGGLE_SIDEBAR,
  LOADING_CURRENCIES,
  SHOW_ERROR_EXPENSE,
  ADD_EXPENSE,
} = require('../actions/expenseActions');

const INITIAL_STATE = {
  showError: false,
  showSideBar: false,
  exchangeRates: [],
  expenses: [],
};

const expenseReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case TOGGLE_SIDEBAR:
    return {
      ...state,
      showSideBar: action.payload,
    };
  case LOADING_CURRENCIES:
    return {
      ...state,
      exchangeRates: action.payload,
    };
  case SHOW_ERROR_EXPENSE:
    return {
      ...state,
      showError: action.payload,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
};

module.exports = expenseReducer;
