const { TOGGLE_SIDEBAR, LOADING_CURRENCIES } = require('../actions/expenseActions');

const INITIAL_STATE = {
  showSideBar: false,
  exchangeRates: [],
  currencies: [],
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
  default:
    return state;
  }
};

module.exports = expenseReducer;
