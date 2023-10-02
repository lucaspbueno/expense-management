import { CHANGE_PAYMENT_METHOD_FITLER } from '../actions/filters.Actions';

const INITIAL_STATE = {
  paymentMethodFilter: '',
};

const filtersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CHANGE_PAYMENT_METHOD_FITLER:
    return {
      ...state,
      paymentMethodFilter: action.payload,
    };
  default:
    return state;
  }
};

export default filtersReducer;
