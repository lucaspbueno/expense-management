export const TOGGLE_BLUR = 'TOGGLE_BLUR';
export const TOGGLE_ERROR = 'TOGGLE_ERROR';

export const toggleError = (payload) => (
  { type: TOGGLE_ERROR, payload }
);
export const toggleBlur = () => ({ type: TOGGLE_BLUR });
