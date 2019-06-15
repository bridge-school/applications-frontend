import { actionType } from '../actions/appActions';

const initialState = {
  currentCohorts: [],
  allCohorts: [],
  loading: false,
  newCohort: null,
  selectedCohort: null,
  cohortSlug: null,
  slugExists: null,
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
      };
    case actionType.FETCH_SELECTED_COHORT_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedCohort: action.payload,
      };
    case actionType.FETCH_COHORT_SLUG_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        cohortSlug: null,
        slugExists: null,
      };
    case actionType.FETCH_COHORT_SLUG_SUCCESS:
      return {
        ...state,
        loading: false,
        cohortSlug: action.payload,
        slugExists: null,
      };
    case actionType.COHORT_SLUG_EXISTS:
      return {
        ...state,
        loading: false,
        slugExists: true,
      };
    case actionType.COHORT_SLUG_NOT_EXIST:
      return {
        ...state,
        loading: false,
        slugExists: false,
      };

    // case actionType.STUDENT_SUBMISSION:
    //   return {
    //     ...state,
    //   };
    default:
      return state;
  }
};

export default reducers;
