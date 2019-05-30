import { 
  ERROR
} from './actions';

const initialState = {
  error: ''
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ERROR:
      return {
        ...initialState,
        error: action.payload
      }
    default:
      return state;
  }
};

export default reducers;
