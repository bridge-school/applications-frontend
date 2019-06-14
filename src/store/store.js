import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebaseConfig from '../config/firebaseConfig';
import reducers from './reducers/rootReducer';

// Logger middleware
const logger = store => next => action => {
  console.log(`Dispatching: ${action.type}`);
  console.log(action);
  let result = next(action);
  console.log('Next State:');
  console.log(store.getState());
  return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function createReduxStore(mode = 'development') {
  // Development store
  if (mode === 'development') {
    return createStore(
      reducers,
      composeEnhancers(
        applyMiddleware(logger, thunk.withExtraArgument({ getFirebase })),
        reactReduxFirebase(firebaseConfig) // redux binding for firebase
      )
    );
  }

  // Production store
  return createStore(
    reducers,
    compose(
      applyMiddleware(thunk.withExtraArgument({ getFirebase })),
      reactReduxFirebase(firebaseConfig) // redux binding for firebase
    )
  );
}

const store = createReduxStore();
export default store;
