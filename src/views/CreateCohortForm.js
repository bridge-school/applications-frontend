import React, { useState, useEffect } from 'react';
import PageTitle from '../components/PageTitle';
import InputDate from '../components/InputDate';
import Button from '../components/Button';
import Input from '../components/Input';
import Dropdown from '../components/Dropdown';
import AddQuestion from '../components/AddQuestion';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createCohort, updateCohort } from '../store/actions/appActions';
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
  dispatchUpdate,
  error,
  newCohort,
  loading,
  auth,
  location,
}) {
  const [editMode, setEditMode] = useState(false);

  const [form, setValues] = useState({
    cohortName: '',
    cohortType: '',
    dateOpen: '',
    dateClosed: '',
    dateResponse: '',
  });

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

  useEffect(() => {
    // if formData was included in the link to this component, then populate it with that formData for editing purposes
    if (location.state && location.state.formData) {
      setEditMode(true);
      setValues(location.state.formData);
      setQuestionList(location.state.formData.formQuestions);
    }
  }, [location.state]);

  // Handle Form Submission
  const handleFormSubmit = e => {
    e.preventDefault();

    // The comma-separated questions need to be converted to
    // an array of objects
    convertMultiQuestion();

    const cohortTypeSplitAtDash = form.cohortType.split('-');
    const cohortSlug =
      form.cohortName.toLowerCase().replace(/ /g, '-') +
      '-' +
      cohortTypeSplitAtDash[0];
    form.cohortSlug = cohortSlug;

    const titleCaseCohortType = cohortTypeSplitAtDash.map(
      word => word.charAt(0).toUpperCase() + word.slice(1)
    );

    const cohortDisplayName = `${form.cohortName} - ${titleCaseCohortType.join(
      ' '
    )}`;
    form.cohortDisplayName = cohortDisplayName;

    if (editMode) {
      form.formQuestions = [...questionList];
      console.log(form, 'UPDATE');
      dispatchUpdate(form.id, form);
    } else {
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
          multiValues: 'Man, Woman, Agender, Non-Binary',
          options: [
            {
              label: 'Man',
              value: 'man',
            },
            {
              label: 'Woman',
              value: 'woman',
            },
            {
              label: 'Agender',
              value: 'agender',
            },
            {
              label: 'Non-Binary',
              value: 'nonbinary',
            },
          ],
        },
        {
          description: 'What pronouns should we use?',
          type: 'checkbox',
          isRequired: true,
          id: 'pronouns',
          multiValues: 'He/Him, She/Her, They/Them',
          options: [
            {
              label: 'He/Him',
              value: 'him',
            },
            {
              label: 'She/Her',
              value: 'her',
            },
            {
              label: 'They/Them',
              value: 'them',
            },
          ],
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
      {loading && (
        <div className="loading-msg">
          Submitting your form to the database...
        </div>
      )}
      {error && <div>{error.message} Please try again!</div>}
      <Form onSubmit={handleFormSubmit}>
        <section>
          <PageTitle
            title={
              editMode
                ? `EDIT ${form.cohortDisplayName} Application`
                : 'Create Cohort Application Form'
            }
          />
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
});

const mapDispatchToProps = dispatch => {
  return {
    submitCohort: formData => dispatch(createCohort(formData)),
    dispatchUpdate: (id, formData) => dispatch(updateCohort(id, formData)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCohortForm);

CreateCohortForm.propTypes = {
  submitCohort: PropTypes.func.isRequired,
  dispatchUpdate: PropTypes.func.isRequired,
  error: PropTypes.object,
  loading: PropTypes.bool,
  newCohort: PropTypes.string,
  auth: PropTypes.object.isRequired,
  location: PropTypes.object,
};
