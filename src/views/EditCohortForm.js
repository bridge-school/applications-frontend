import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  fetchSelectedCohort,
  studentSubmission,
} from '../store/actions/appActions';
import PageTitle from '../components/PageTitle';
import Loading from '../components/Loading';
import Input from '../components/Input';
import Button from '../components/Button';
import { connect } from 'react-redux';

const Form = styled.form`
  margin: 2em 0;
  button {
    margin: 2em auto;
    display: block;
  }
`;

const CohortName = styled.p`
  font-size: 1.5em;
  letter-spacing: -0.5px;
  font-weight: bold;
  margin: 0.5em 0;
`;

function EditCohortForm({ error, loading, location }) {
  const editableData = location.state.formData;

  const [formData, setFormData] = useState({});

  const updateInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('EDITED', formData);
  };

  // const displayForm = () => {
  //   return selectedCohort.formQuestions.map(question => {
  //     const inputProps = {
  //       type: question.type,
  //       label: question.description,
  //       name: question.id,
  //       required: question.isRequired,
  //       handleChange: updateInput,
  //       value: formData[question.id],
  //       key: question.id,
  //     };

  //     switch (question.type) {
  //       case 'input':
  //       case 'email':
  //       case 'checkbox':
  //       case 'select':
  //         return <Input {...inputProps} />;
  //       case 'textarea':
  //         return <Input {...inputProps} rows={question.rows} />;
  //       default:
  //         return null;
  //     }
  //   });
  // };

  if (error) {
    return <div>{error.message} Please try again!</div>;
  }
  if (loading) return <Loading />;

  // if (successfulSubmission) return <div>saved</div>;

  // if (!formIdFound) {
  //   return <div>Application not found. Please try again.</div>;
  // }
  console.log('INFO', location.state.formData);
  return (
    <Form onSubmit={handleSubmit}>
      <PageTitle title="EDIT FORM" />
      {/* <CohortName>{selectedCohort.cohortDisplayName}</CohortName> */}

      {/* {displayForm()} */}

      <Button text="apply for bridge" />
    </Form>
  );
}

const mapStateToProps = state => ({
  loading: state.app.loading,
  error: state.app.error,
});

const mapDispatchToProps = dispatch => {
  return {
    // getSelectedCohort: applicationID =>
    //   dispatch(fetchSelectedCohort(applicationID)),
    // sendStudentSubmission: formData => dispatch(studentSubmission(formData)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCohortForm);

EditCohortForm.propTypes = {
  getSelectedCohort: PropTypes.func,
  error: PropTypes.object,
  loading: PropTypes.bool,
};
