export const TOGGLE_ERROR = 'TOGGLE_ERROR';
export const TOGGLE_BLUR = 'TOGGLE_BLUR';

export const toggleError = (payload) => (
  { type: TOGGLE_ERROR, payload }
);
export const toggleBlur = (payload) => ({ type: TOGGLE_BLUR, payload });
