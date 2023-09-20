const { TOGGLE_ERROR, TOGGLE_BLUR } = require('../actions/loginActions');

const INITIAL_STATE = {
  showError: false,
  isBlur: false,
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case TOGGLE_ERROR:
    return {
      ...state,
      showError: action.payload,
    };
  case TOGGLE_BLUR:
    return {
      ...state,
      isBlur: action.payload,
    };
  default:
    return state;
  }
};

export default loginReducer;
