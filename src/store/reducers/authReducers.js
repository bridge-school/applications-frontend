import { actionType } from '../actions/authActions';

const initialState = {
  authError: null,
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOGIN_ERROR:
      return {
        ...state,
        authError: action.payload,
      };
    case actionType.LOGIN_SUCCESS:
      return {
        ...state,
        authError: null,
      };
    case actionType.LOGOUT_SUCCESS:
      return state;
    default:
      return state;
  }
};

export default authReducers;
