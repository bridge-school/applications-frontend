export const actionType = {
  ERROR: 'ERROR',

  FETCH_ALL_COHORTS_REQUEST: 'FETCH_ALL_COHORTS_REQUEST',
  FETCH_ALL_COHORTS_SUCCESS: 'FETCH_ALL_COHORTS_SUCCESS',

  FETCH_CURRENT_COHORTS_REQUEST: 'FETCH_CURRENT_COHORTS_REQUEST',
  FETCH_CURRENT_COHORTS_SUCCESS: 'FETCH_CURRENT_COHORTS_SUCCESS',

  FETCH_SELECTED_COHORT_REQUEST: 'FETCH_SELECTED_COHORT_REQUEST',
  FETCH_SELECTED_COHORT_SUCCESS: 'FETCH_SELECTED_COHORT_SUCCESS',
  FETCH_COHORT_SLUG_REQUEST: 'FETCH_COHORT_SLUG_REQUEST',
  FETCH_COHORT_SLUG_SUCCESS: 'FETCH_COHORT_SLUG_SUCCESS',
  COHORT_SLUG_EXISTS: 'COHORT_SLUG_EXISTS',
  COHORT_SLUG_NOT_EXIST: 'COHORT_SLUG_NOT_EXIST',

  CREATE_COHORT_REQUEST: 'CREATE_COHORT_REQUEST',
  CREATE_COHORT_SUCCESS: 'CREATE_COHORT_SUCCESS',

  STUDENT_SUBMISSION_REQUEST: 'STUDENT_SUBMISSION_REQUEST',
  STUDENT_SUBMISSION_SUCCESS: 'STUDENT_SUBMISSION_SUCCESS',
};

export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8081'
    : 'http://applications-backend.bridgeschoolapp.io';

export const error = errorMsg => ({
  type: actionType.ERROR,
  payload: errorMsg,
});

// ---------- CREATE a cohort form
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
    .then(res => dispatch(createCohortSuccess(res.message)))
    .catch(err => dispatch(error(err)));
};

// ---------- display ALL forms
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

// ---------- display CURRENT cohorts only
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

// ---------- display ONE cohort form
export const fetchSelectedCohortRequest = () => ({
  type: actionType.FETCH_SELECTED_COHORT_REQUEST,
});

export const fetchSelectedCohortSuccess = selectedCohort => ({
  type: actionType.FETCH_SELECTED_COHORT_SUCCESS,
  payload: selectedCohort,
});

export const fetchSelectedCohort = applicationId => dispatch => {
  dispatch(fetchSelectedCohortRequest());

  fetch(`${BASE_URL}/applications/${applicationId}`)
    .then(res => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    })
    .then(res => dispatch(fetchSelectedCohortSuccess(res.data)))
    .catch(err => dispatch(error(err)));
};

// ---------- student SUBMISSION to a cohort
export const studentSubmissionRequest = () => ({
  type: actionType.STUDENT_SUBMISSION_REQUEST,
});

export const studentSubmissionSuccess = createdID => ({
  type: actionType.STUDENT_SUBMISSION_SUCCESS,
  payload: createdID,
});

export const studentSubmission = formData => dispatch => {
  dispatch(studentSubmissionRequest());

  fetch(`${BASE_URL}/applications/apply`, {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => {
      if (!res.ok) {
        throw new Error('Error submitting application.');
      }
      return res.json();
    })
    .then(res => dispatch(studentSubmissionSuccess(res.message)))
    .catch(err => dispatch(error(err)));
};
