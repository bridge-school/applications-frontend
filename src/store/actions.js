export const actionType = {
  ERROR: 'ERROR',
  CREATE_COHORT_REQUEST: 'CREATE_COHORT_REQUEST',
  CREATE_COHORT_SUCCESS: 'CREATE_COHORT_SUCCESS',
  CREATE_COHORT_ERROR: 'CREATE_COHORT_ERROR',
  FETCH_ALL_COHORTS_REQUEST: 'FETCH_ALL_COHORTS_REQUEST',
  FETCH_ALL_COHORTS_SUCCESS: 'FETCH_ALL_COHORTS_SUCCESS',
  FETCH_CURRENT_COHORTS_REQUEST: 'FETCH_CURRENT_COHORTS_REQUEST',
  FETCH_CURRENT_COHORTS_SUCCESS: 'FETCH_CURRENT_COHORTS_SUCCESS',

  STUDENT_SUBMISSION: 'STUDENT_SUBMISSION',
};

export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8081'
    : 'http://applications-backend.bridgeschoolapp.io';

export const error = errorMsg => ({
  type: actionType.ERROR,
  payload: errorMsg,
});

export const createCohortRequest = () => ({
  type: actionType.CREATE_COHORT_REQUEST,
});
export const createCohortSuccess = createdID => ({
  type: actionType.CREATE_COHORT_SUCCESS,
  payload: createdID,
});
export const createCohort = formData => dispatch => {
  dispatch(createCohortRequest());

  fetch(`${BASE_URL}/applications`, {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(res => dispatch(createCohortSuccess(res.id)))
    .catch(err => dispatch(error(err)));
};

export const fetchAllCohortsRequest = () => ({
  type: actionType.FETCH_ALL_COHORTS_REQUEST,
});
export const fetchAllCohortsSuccess = allCohorts => ({
  type: actionType.FETCH_ALL_COHORTS_SUCCESS,
  payload: allCohorts,
});
export const fetchAllCohorts = () => dispatch => {
  dispatch(fetchAllCohortsRequest());

  fetch(`${BASE_URL}/applications`)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(res => dispatch(fetchAllCohortsSuccess(res.data)))
    .catch(err => dispatch(error(err)));
};

export const fetchCurrentCohortsRequest = () => ({
  type: actionType.FETCH_CURRENT_COHORTS_REQUEST,
});
export const fetchCurrentCohortsSuccess = currentCohorts => ({
  type: actionType.FETCH_CURRENT_COHORTS_SUCCESS,
  payload: currentCohorts,
});
export const fetchCurrentCohorts = () => dispatch => {
  dispatch(fetchCurrentCohortsRequest());

  fetch(`${BASE_URL}/applications/current`)
    .then(res => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    })
    .then(res => dispatch(fetchCurrentCohortsSuccess(res.data)))
    .catch(err => dispatch(error(err)));
};
