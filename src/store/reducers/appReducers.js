import { actionType } from '../actions/appActions';

const initialState = {
  currentCohorts: [],
  allCohorts: [],
  loading: false,
  newCohort: null,
  selectedCohort: null,
  successfulSubmission: false,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionType.CREATE_COHORT_REQUEST:
      return {
        ...state,
        newCohort: null,
        loading: true,
        error: null,
      };
    case actionType.CREATE_COHORT_SUCCESS:
      return {
        ...state,
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
    case actionType.FETCH_CURRENT_COHORTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionType.FETCH_CURRENT_COHORTS_SUCCESS:
      return {
        ...state,
        loading: false,
        currentCohorts: action.payload,
      };
    case actionType.FETCH_SELECTED_COHORT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        selectedCohort: null,
        successfulSubmission: false,
      };
    case actionType.FETCH_SELECTED_COHORT_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedCohort: action.payload,
      };
    case actionType.STUDENT_SUBMISSION_REQUEST:
      return {
        ...state,
        error: null,
        successfulSubmission: false,
      };
    case actionType.STUDENT_SUBMISSION_SUCCESS:
      return {
        ...state,
        successfulSubmission: true,
      };
    default:
      return state;
  }
};

export default reducers;
