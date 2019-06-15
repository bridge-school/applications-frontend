import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';
import InputDate from '../components/InputDate';
import Button from '../components/Button';
import Input from '../components/Input';
import Dropdown from '../components/Dropdown';
import AddQuestion from '../components/AddQuestion';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createCohort, fetchCohortSlug } from '../store/actions/appActions';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import uuid from 'uuid/v4';
import { Link } from 'react-router-dom';

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
  line-height: 1.2;
  max-width: 41em;
  margin-bottom: 2em;
  color: #666;
`;

function CreateCohortForm({
  submitCohort,
  fetchSlug,
  error,
  newCohort,
  loading,
  auth,
  slugExists,
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

    // The comma-separated questions need to be converted to
    // an array of objects
    convertMultiQuestion();

    // to do - filter through DB for duplicate name
    const cohortTypeSplitAtDash = form.cohortType.split('-');
    const cohortSlug =
      form.cohortName.toLowerCase().replace(/ /g, '-') +
      '-' +
      cohortTypeSplitAtDash[0];
    form.cohortSlug = cohortSlug;

    fetchSlug(cohortSlug); // if DB has result, slugExists = true

    if (slugExists !== null && !slugExists) {
      
      const titleCaseCohortType = cohortTypeSplitAtDash.map(
        word => word.charAt(0).toUpperCase() + word.slice(1)
      );

      const cohortDisplayName = `${form.cohortName} - ${titleCaseCohortType.join(
        ' '
      )}`;
      form.cohortDisplayName = cohortDisplayName;
      
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
      console.log('CREATING', form);
      submitCohort(form);
    }
  };

  // Generic handler for input fields to save the value as you type
  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Converting Mutiple Choice Questions to an array before sending
  // off to the DB.
  const convertMultiQuestion = () => {
    const values = [...questionList];

    values.forEach(question => {
      if (question.multiValues) {
        let questionAnswers = question.multiValues.split(',');

        question.options = questionAnswers
          .filter(answer => answer !== '')
          .map(answer => {
            return {
              label: answer.trim(),
              value: uuid(),
            };
          });
      }
    });

    setQuestionList(values);
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

  const updateQuestionInputField = i => type => e => {
    const values = [...questionList];
    type === 'isRequired'
      ? (values[i][type] = e.target.checked)
      : (values[i][type] = e.target.value);
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

  // If not loggedin redirect
  if (!auth.uid) return <Redirect to="/login" />;

  // if (error) {
  //   return <div>{error.message} Please try again!</div>;
  // }
  // if (loading) {
  //   return <div>Submitting your form to the database...</div>;
  // }
  if (newCohort) {
    return (
      <div>
        <p>
          <strong>{newCohort}</strong>
        </p>
        <p>
          <Link to="/">Go back to homepage</Link>
        </p>
      </div>
    );
  }
  return (
    <>
      {slugExists && (
        <div className="slug-msg">
          The cohort name and type combination already exists. Please try
          another combination.
        </div>
      )}
      {loading && (
        <div className="loading-msg">
          Submitting your form to the database...
        </div>
      )}
      {error && <div>{error.message} Please try again!</div>}
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
          questions added to the beginning of the student&rsquo;s application
          form.
        </Note>

        {questionList.map((question, index) => (
          <AddQuestion
            data={question}
            handleInputChange={updateQuestionInputField}
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
  </>
  );
}

const mapStateToProps = state => ({
  loading: state.app.loading,
  newCohort: state.app.newCohort,
  error: state.app.error,
  auth: state.firebase.auth,
  cohortSlug: state.app.cohortSlug,
  slugExists: state.app.slugExists,
});

const mapDispatchToProps = dispatch => {
  return {
    submitCohort: formData => dispatch(createCohort(formData)),
    fetchSlug: slug => dispatch(fetchCohortSlug(slug)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCohortForm);

CreateCohortForm.propTypes = {
  submitCohort: PropTypes.func.isRequired,
  fetchSlug: PropTypes.func.isRequired,
  error: PropTypes.object,
  loading: PropTypes.bool,
  newCohort: PropTypes.string,
  auth: PropTypes.object.isRequired,
  slugExists: PropTypes.bool,
};
