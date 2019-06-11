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

const Note = styled.p`
  font-style: italic;
  line-height: 1.2;
  max-width: 41em;
  margin-bottom: 2em;
  color: #555;
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

    // to do - filter through DB for duplicate name
    const cohortSlug =
      form.cohortName.toLowerCase().replace(/ /g, '-') +
      '-' +
      form.cohortType.split('-')[0];
    form.cohortSlug = cohortSlug;

    const defaultQuestions = [
      {
        description: 'Full Name',
        type: 'input',
        isRequired: true,
        id: 'fullName',
      },
      {
        description: 'Email',
        type: 'email',
        isRequired: true,
        id: 'email',
      },
      {
        description: 'How do you identify?',
        type: 'checkbox',
        isRequired: true,
        id: 'identify',
      },
      {
        description: 'What pronouns should we use?',
        type: 'checkbox',
        isRequired: true,
        id: 'pronouns',
      },
    ];
    form.formQuestions = [...defaultQuestions, ...questionList];

    console.log(JSON.stringify(form));
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
    console.log('e target name: ', e.target.name);
    switch (e.target.name) {
      case 'isRequired' + i:
        values[i][type] = e.target.checked;
        break;
      case 'type' + i:
        values[i]['hasMultiQuestion'] =
          e.target.value === 'checkbox' || e.target.value === 'select';
        values[i]['multiValues'] = '';
        values[i][type] = e.target.value;
        break;
      case 'multiDescription' + i:
        values[i]['multiValues'] = e.target.value;
        break;
      case 'description' + i:
      default:
        values[i][type] = e.target.value;
    }

    console.log(values);
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
                  label: 'Product Design',
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

        <Note>
          Note: <strong>Full Name</strong>, <strong>Email</strong>,{' '}
          <strong>How do you identify?</strong>, and{' '}
          <strong>What pronouns should we use?</strong> will be required
          questions added to the beginning of the form.
        </Note>

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
