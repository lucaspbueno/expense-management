/* eslint-disable no-case-declarations */
const {
  TOGGLE_SIDEBAR,
  LOADING_CURRENCIES,
  SHOW_ERROR_EXPENSE,
  ADD_EXPENSE,
  LOADING_EXCHANGE_RATES,
  DELETE_EXPENSE,
  calculateNextExpenseId,
} = require('../actions/expenseActions');

const INITIAL_STATE = {
  showError: false,
  showSideBar: false,
  idToEdit: '',
  expenses: [],
  currencies: [],
  exchangeRates: {},
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
      currencies: action.payload,
    };
  case SHOW_ERROR_EXPENSE:
    return {
      ...state,
      showError: action.payload,
    };
  case ADD_EXPENSE:
    const nextExpenseId = calculateNextExpenseId(state.expenses);
    const newExpense = {
      ...action.payload,
      id: nextExpenseId,
    };
    return {
      ...state,
      expenses: [...state.expenses, newExpense],
    };
  case LOADING_EXCHANGE_RATES:
    return {
      ...state,
      exchangeRates: { ...action.payload },
    };
  case DELETE_EXPENSE:
    const expensesFiltered = state.expenses.filter(({ id }) => id !== action.id);
    return {
      ...state,
      expenses: expensesFiltered.reduce((acc, expense, index) => {
        expense = {
          ...expense,
          id: index + 1,
        };
        acc.push(expense);
        return acc;
      }, []),
    };
  default:
    return state;
  }
};

module.exports = expenseReducer;
