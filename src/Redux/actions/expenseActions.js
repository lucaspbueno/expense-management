export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const LOADING_CURRENCIES = 'LOADING_CURRENCIES';

export const toggleSideBar = (payload) => ({
  type: TOGGLE_SIDEBAR,
  payload,
});

export const loadingCurrencies = (payload) => ({
  type: LOADING_CURRENCIES,
  payload,
});
