export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const LOADING_CURRENCIES = 'LOADING_CURRENCIES';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const SHOW_ERROR_EXPENSE = 'SHOW_ERROR_EXPENSE';
export const LOADING_EXCHANGE_RATES = 'LOADING_EXCHANGE_RATES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const toggleSideBar = (payload) => ({
  type: TOGGLE_SIDEBAR,
  payload,
});

export const loadingCurrencies = (payload) => ({
  type: LOADING_CURRENCIES,
  payload,
});

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const showErrorExpense = (payload) => ({
  type: SHOW_ERROR_EXPENSE,
  payload,
});

export const loadingExchangeRates = (payload) => ({
  type: LOADING_EXCHANGE_RATES,
  payload,
});

export const deleteExpenses = (id) => ({
  type: DELETE_EXPENSE,
  id,
});

export const calculateNextExpenseId = (expenses) => {
  const ids = expenses.map((expense) => expense.id);
  return ids.length === 0 ? 1 : Math.max(...ids) + 1;
};
