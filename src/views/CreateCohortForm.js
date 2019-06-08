import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';
import InputDate from '../components/InputDate';
import Button from '../components/Button';
import Input from '../components/Input';
import AddQuestions from '../components/AddQuestions';
import { connect } from 'react-redux';
import { createCohort } from '../store/actions';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Form = styled.form`
  button {
    margin: 2em auto;
    display: block;
  }
`;

function CreateCohortForm({ submitCohort, error, newCohort, loading }) {
  /**
   * form are the static form fields.
   * setValues is the method to set the state for those
   * static form fields.
   */
  const [form, setValues] = useState({
    cohortName: '',
    cohortType: '',
    dateOpen: '',
    dateClosed: '',
    dateResponse: '',
  });

  /**
   * fields are the dynamic application questions
   * setFields is the method to set the state for those
   * dynamic form fields.
   */
  const [fields, setFields] = useState([
    {
      description: '',
      type: '',
      ifRequired: false,
    },
    {
      description: '',
      type: '',
      ifRequired: false,
    },
  ]);

  // Handle Form Submission
  const handleFormSubmit = e => {
    e.preventDefault();
    console.log(form);
    submitCohort(form);
  };

  /**
   *
   * Generic handler for all static fields
   * To save the value as you type.
   */
  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * Handler for the inputs that reside in the dynamic question container
   */
  const handleQuestionChange = i => type => e => {
    const values = [...fields];
    values[i][type] =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFields(values);
  };

  /**
   *
   * Add New Question Button handler.
   * TODO
   */
  const handleAddNewQuestion = e => {
    e.preventDefault();
  };

  /**
   *
   * Remove question handler.
   */
  const handleRemoveQuestion = i => e => {
    e.preventDefault();
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  };

  if (error) {
    return <div>{error.message}! Please try again.</div>;
  }
  if (loading) {
    return <div>Submitting your form to the database...</div>;
  }
  if (newCohort) {
    return <div>Successfully created {newCohort}!</div>;
  }
  return (
    <div>
      <PageTitle title="Create Cohort Application Form" />
      <Form onSubmit={handleFormSubmit}>
        <Input
          name="cohortName"
          type="text"
          value={form.cohortName}
          label="Cohort Name"
          handleChange={updateField}
        />
        <Input
          name="cohortType"
          type="text"
          value={form.cohortType}
          label="Cohort Type"
          handleChange={updateField}
        />
        <InputDate
          name="dateOpen"
          value={form.dateOpen}
          label="Date Open"
          handleChange={updateField}
        />
        <InputDate
          name="dateClosed"
          value={form.dateClosed}
          label="Date Closed"
          handleChange={updateField}
        />
        <InputDate
          name="dateResponse"
          value={form.dateResponse}
          label="Date of Response"
          handleChange={updateField}
        />
        <AddQuestions
          fields={fields}
          handleChange={handleQuestionChange}
          handleAddNewQuestion={handleAddNewQuestion}
          handleRemoveQuestion={handleRemoveQuestion}
        />
        <Button text="create application group" />
      </Form>
    </div>
  );
}

const mapStateToProps = state => ({
  loading: state.loading,
  newCohort: state.newCohort,
  error: state.error,
});

const mapDispatchToProps = dispatch => {
  return {
    submitCohort: formData => dispatch(createCohort(formData)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCohortForm);

CreateCohortForm.propTypes = {
  submitCohort: PropTypes.func.isRequired,
  error: PropTypes.string,
  loading: PropTypes.bool,
  newCohort: PropTypes.string,
};
