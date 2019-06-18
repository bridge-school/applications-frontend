import { actionType } from '../actions/authActions';

const initialState = {
  authError: null,
  loading: false,
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionType.LOGIN_ERROR:
      return {
        ...state,
        authError: action.payload,
        loading: false,
      };
    case actionType.LOGIN_SUCCESS:
      return {
        ...state,
        authError: null,
        loading: false,
      };
    case actionType.LOGOUT_SUCCESS:
      return state;
    default:
      return state;
  }
};

export default authReducers;
