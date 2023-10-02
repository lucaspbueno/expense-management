/* eslint-disable sonarjs/no-duplicated-branches */
/* eslint-disable react-func/max-lines-per-function */
/* eslint-disable no-case-declarations */
const {
  TOGGLE_SIDEBAR,
  LOADING_CURRENCIES,
  SHOW_ERROR_EXPENSE,
  ADD_EXPENSE,
  LOADING_EXCHANGE_RATES,
  DELETE_EXPENSE,
  calculateNextExpenseId,
  EDIT_FORM,
  EDIT_EXPENSE,
  APPLY_FILTER,
} = require('../actions/expenseActions');

const INITIAL_STATE = {
  showError: false,
  showSideBar: false,
  typeForm: 'add',
  idToEdit: '',
  expenses: [],
  expensesForFilter: [],
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
      expensesForFilter: [...state.expenses, newExpense],
    };
  case LOADING_EXCHANGE_RATES:
    return {
      ...state,
      exchangeRates: { ...action.payload },
    };
  case DELETE_EXPENSE:
    const expensesFiltered = state.expenses.filter(({ id }) => id !== action.id);
    const res = expensesFiltered.reduce((acc, expense, index) => {
      expense = {
        ...expense,
        id: index + 1,
      };
      acc.push(expense);
      return acc;
    }, []);
    return {
      ...state,
      expenses: res,
      expensesForFilter: res,
    };
  case EDIT_FORM:
    return {
      ...state,
      typeForm: action.payload.typeForm,
      idToEdit: action.payload.id,
    };
  case EDIT_EXPENSE:
    const result = state.expenses.reduce((acc, expense) => {
      if (expense.id === state.idToEdit) {
        expense = {
          ...action.payload,
          id: state.idToEdit,
        };
      }
      acc.push(expense);
      return acc;
    }, []);
    return {
      ...state,
      expenses: result,
      expensesForFilter: result,
    };
  case APPLY_FILTER:
    return {
      ...state,
      expenses: action.payload,
      expensesForFilter: action.payload,
    };
  default:
    return state;
  }
};

export default expenseReducer;
