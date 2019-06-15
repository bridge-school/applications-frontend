import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../store/reducers/appReducers';
import { render } from '@testing-library/react';

export function renderWithRedux(
  component,
  { initialState, store = createStore(reducers, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
}
