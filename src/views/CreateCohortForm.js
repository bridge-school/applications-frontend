import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';
import InputDate from '../components/InputDate';
import Button from '../components/Button';
import Input from '../components/Input';
import Dropdown from '../components/Dropdown';
import AddQuestion from '../components/AddQuestion';
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
  h2 {
    margin-bottom: 1em;
  }
`;

const DropdownWrapper = styled.div`
  width: 100%;
  margin: 1.5em 0;
`;

const Dates = styled.div`
  display: flex;
  margin: 2rem 0;
  & > div {
    flex: 1;
    margin-right: 2em;
    &:last-of-type {
      margin-right: 0;
    }
    input {
      width: 100%;
    }
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

  // Handle Form Submission
  const handleFormSubmit = e => {
    e.preventDefault();
    const splitName = form.cohortType.split('-');

    // to do - filter through DB for duplicate name
    const setCohortSlug =
      form.cohortName.toLowerCase().replace(/ /g, '-') + '-' + splitName[0];
    form.cohortSlug = setCohortSlug;

    const setCohortDisplayName = () => {
      const capitalized = [];
      splitName.forEach(word =>
        capitalized.push(word.charAt(0).toUpperCase() + word.slice(1))
      );
      return `${capitalized.join(' ')} – ${form.cohortName}`;
    };
    form.cohortDisplayName = setCohortDisplayName();

    form.formQuestions = questionList;

    console.log(form);
    submitCohort(form);
  };

  // Generic handler for input fields to save the value as you type
  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ------- Application Questions section
  const populateQuestionsList = () => ({
    description: '',
    type: '',
    isRequired: false,
    id: uuid(),
  });

  const [questionList, setQuestionList] = useState([
    populateQuestionsList(),
    populateQuestionsList(),
  ]);

  const handleQuestionChange = i => type => e => {
    const values = [...questionList];
    values[i][type] =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setQuestionList(values);
  };

  const handleAddNewQuestion = e => {
    e.preventDefault();
    setQuestionList([...questionList, populateQuestionsList()]);
  };

  const handleRemoveQuestion = (id, e) => {
    e.preventDefault();
    const newList = questionList.filter(question => question.id !== id);
    setQuestionList(newList);
  };

  if (error) {
    return <div>{error.message} Please try again!</div>;
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
            required
            name="cohortType"
            value={form.cohortType}
            data={{
              description: 'Cohort Type',
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
        <Dates>
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
        </Dates>
      </section>
      <section>
        <PageTitle title="Application Questions" />

        {questionList.map((question, index) => (
          <AddQuestion
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
  error: PropTypes.object,
  loading: PropTypes.bool,
  newCohort: PropTypes.string,
};
