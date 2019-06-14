import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import appReducers from './appReducers';
import authReducers from './authReducers';

export default combineReducers({
  app: appReducers,
  auth: authReducers,
  firebase: firebaseReducer,
});
