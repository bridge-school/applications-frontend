export const actionType = {
  LOGIN_LOADING: 'LOGIN_LOADING',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
};

export const logIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch({ type: actionType.LOGIN_LOADING });
    if (!credentials.username || !credentials.password) {
      let errorMessage = 'please enter the password';
      errorMessage = !credentials.username
        ? 'please enter an email'
        : errorMessage;
      errorMessage =
        !credentials.username && !credentials.password
          ? 'please enter an email and password'
          : errorMessage;
      dispatch({
        type: actionType.LOGIN_ERROR,
        payload: errorMessage,
      });
    } else {
      const firebase = getFirebase();
      firebase
        .auth()
        .signInWithEmailAndPassword(credentials.username, credentials.password)
        .then(() => {
          dispatch({ type: actionType.LOGIN_SUCCESS });
        })
        .catch(err => {
          dispatch({
            type: actionType.LOGIN_ERROR,
            payload: 'Login failed! Invalid email or password!',
          });
        });
    }
  };
};

export const logOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch({ type: actionType.LOGIN_LOADING });
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: actionType.LOGOUT_SUCCESS });
      });
  };
};
