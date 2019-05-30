export const ERROR = 'ERROR';

export const handleError = error => ({
  type: ERROR,
  payload: error
});