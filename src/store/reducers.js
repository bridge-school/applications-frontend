import { actionType } from './actions';

const initialState = {
  currentCohorts: [],
  allCohorts: [],
  loading: false,
  createCohortError: null,
  newCohort: null,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionType.CREATE_COHORT_ERROR:
      return {
        ...state,
        newCohort: null,
        loading: false,
        createCohortError: action.payload,
      };
    case actionType.CREATE_COHORT_REQUEST:
      return {
        ...state,
        newCohort: null,
        loading: true,
        createCohortError: null,
      };
    case actionType.CREATE_COHORT_SUCCESS:
      return {
        ...state,
        createCohortError: null,
        loading: false,
        newCohort: action.payload,
      };
    case actionType.FETCH_ALL_COHORTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionType.FETCH_ALL_COHORTS_SUCCESS:
      return {
        ...state,
        loading: false,
        allCohorts: action.payload,
      };
    // case actionType.FETCH_CURRENT_COHORTS:
    //   return {
    //     ...state,
    //   };
    // case actionType.FETCH_ALL_COHORTS:
    //   return {
    //     ...state,
    //   };
    // case actionType.STUDENT_SUBMISSION:
    //   return {
    //     ...state,
    //   };
    default:
      return state;
  }
};

export default reducers;
