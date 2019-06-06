import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';
import InputDate from '../components/InputDate';
import Input from '../components/Input';
import AddQuestions from '../components/AddQuestions';

export default function CreateCohort() {
  const [form, setValues] = useState({
    cohortName: '',
    cohortType: '',
    dateOpen: '',
    dateClosed: '',
    dateResponse: ''
  });

  const [fields, setFields] = useState(
    [
      { 
        description: null, 
        type: null, 
        isRequired: null 
      }, 
      { 
        description: null, 
        type: null, 
        isRequired: null 
      }
    ]
  );
  
  // Handle Form Submission
  const handleFormSubmit = e => {
    e.preventDefault();
  };

  // Update any input field
  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // Handle question input changes
  const handleQuestionChange = (i) => (type) => (e) => {
    const values = [...fields];
    values[i][type] = e.target.value;
    setFields(values);
  }

  // Handle adding new question
  const handleAddNewQuestion = (e) => {
    e.preventDefault();
  }

  // Handle Removing the question
  const handleRemoveQuestion = (i) => (e) => {
    e.preventDefault();
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
