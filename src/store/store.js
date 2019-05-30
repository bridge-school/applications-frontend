import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

// Logger middleware
const logger = store => next => action => {
  // console.log(`Dispatching: ${action.type}`);
  // console.log(action);
  let result = next(action);
  // console.log('Next State:');
  // console.log(store.getState());
  return result;
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function createReduxStore(mode = 'development') {
  // Development store
  if(mode == 'development') {
    return createStore(
      reducers,
      composeEnhancers(
        applyMiddleware(logger, thunk)
      )
    );
  }

  // Production store
  return createStore(
    reducers,
    applyMiddleware(thunk)
  );
}