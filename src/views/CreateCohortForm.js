import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';
import InputDate from '../components/InputDate';
import Button from '../components/Button';
import Input from '../components/Input';
import Dropdown from '../components/Dropdown';
import AddQuestions from '../components/AddQuestions';
import { connect } from 'react-redux';
import { createCohort } from '../store/actions';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import uuid from 'uuid/v4';

const Form = styled.form`
  button {
    margin: 2em auto;
    display: block;
  }
  section {
    margin: 2em 0 4em;
  }
`;

const DropdownWrapper = styled.div`
  width: 19%;
  margin-right: 2rem;
`;

function CreateCohortForm({
  submitCohort,
  createCohortError,
  newCohort,
  loading,
}) {
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

  // Handle Form Submission
  const handleFormSubmit = e => {
    e.preventDefault();
    form.questionList = questionList;
    console.log(form);
    // submitCohort(form);
  };

  // Generic handler for input fields to save the value as you type
  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ------- Application Questions section
  const [questionList, setQuestionList] = useState([
    {
      description: '',
      type: '',
      ifRequired: false,
      id: uuid(),
    },
    {
      description: '',
      type: '',
      ifRequired: false,
      id: uuid(),
    },
  ]);

  const handleQuestionChange = i => type => e => {
    const values = [...questionList];
    values[i][type] =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setQuestionList(values);
  };

  const handleAddNewQuestion = e => {
    e.preventDefault();
    const values = [...questionList];
    values.push({
      description: '',
      type: '',
      ifRequired: false,
      id: uuid(),
    });
    setQuestionList(values);
  };

  const handleRemoveQuestion = (id, e) => {
    e.preventDefault();
    const newList = questionList.filter(question => question.id !== id);
    setQuestionList(newList);
  };

  if (createCohortError) {
    return <div>{createCohortError.message} Please try again!</div>;
  }
  if (loading) {
    return <div>Submitting your form to the database...</div>;
  }
  if (newCohort) {
    return <div>Successfully created {newCohort}!</div>;
  }
  return (
    <Form onSubmit={handleFormSubmit}>
      <section>
        <PageTitle title="Create Cohort Application Form" />
        <Input
          name="cohortName"
          type="text"
          value={form.cohortName}
          required
          label="Cohort Name"
          handleChange={updateField}
        />
        <DropdownWrapper>
          <Dropdown
            name="cohortType"
            value={form.cohortType}
            data={{
              description: 'Cohort Type',
              placeholder: 'Select cohort type',
              items: [
                {
                  label: 'Backend Development',
                  value: 'backend-development',
                },
                {
                  label: 'Frontend Development',
                  value: 'frontend-development',
                },
                {
                  label: 'Design',
                  value: 'design',
                },
              ],
            }}
            handleChange={updateField}
          />
        </DropdownWrapper>
        <InputDate
          name="dateOpen"
          value={form.dateOpen}
          required
          label="Date Open"
          handleChange={updateField}
        />
        <InputDate
          name="dateClosed"
          value={form.dateClosed}
          required
          label="Date Closed"
          handleChange={updateField}
        />
        <InputDate
          name="dateResponse"
          value={form.dateResponse}
          required
          label="Date of Response"
          handleChange={updateField}
        />
      </section>
      <section>
        <PageTitle title="Application Questions" />

        {questionList.map((question, index) => (
          <AddQuestions
            data={question}
            handleChange={handleQuestionChange}
            handleAddNewQuestion={handleAddNewQuestion}
            handleRemoveQuestion={handleRemoveQuestion}
            key={question.id}
            index={index}
          />
        ))}

        <Button text="Add new Question" handleClick={handleAddNewQuestion} />
      </section>

      <Button text="create application group" />
    </Form>
  );
}

const mapStateToProps = state => ({
  loading: state.loading,
  newCohort: state.newCohort,
  createCohortError: state.createCohortError,
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
  createCohortError: PropTypes.object,
  loading: PropTypes.bool,
  newCohort: PropTypes.string,
};
