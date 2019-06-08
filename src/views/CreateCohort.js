import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';
import InputDate from '../components/InputDate';
import Input from '../components/Input';
import AddQuestions from '../components/AddQuestions';

export default function CreateCohort() {

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
    dateResponse: ''
  });

  /**
   * fields are the dynamic application questions
   * setFields is the method to set the state for those
   * dynamic form fields.
   */
  const [fields, setFields] = useState(
    [
      {
        description: "",
        type: "",
        ifRequired: false
      },
      {
        description: "",
        type: "",
        ifRequired: false
      }
    ]
  );

  // Handle Form Submission
  const handleFormSubmit = e => {
    e.preventDefault();
  };

  /**
   * 
   * Generic handler for all static fields
   * To save the value as you type.
   */
  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  /**
   * Handler for the inputs that reside in the dynamic question container 
   */
  const handleQuestionChange = (i) => (type) => (e) => {
    const values = [...fields];
    values[i][type] = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFields(values);
  }

  /**
   * 
   * Add New Question Button handler.
   * Used by the AddQuestions component
   * 
   */
  const handleAddNewQuestion = (e) => {
    //e.preventDefault();
    console.log("Adding a new question!");
    const values = [...fields];
    values.push(
      {
        description: "",
        type: "",
        ifRequired: false
      }
    );
    setFields(values);
  }

  /**
   * 
   * Remove question handler. 
   * Used by the AddQuestions component
   */
  const handleRemoveQuestion = (i) => (e) => {
    //e.preventDefault();
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }

  return (
    <div>
      <PageTitle title="Create Cohort Application Form" />
      <form onSubmit={handleFormSubmit}>
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
      </form>
    </div>
  );
}
