import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';
import InputDate from '../components/InputDate';
import Input from '../components/Input';

export default function CreateCohort() {
  const [form, setValues] = useState({
    cohortName: '',
    cohortType: '',
    dateOpen: '',
    dateClosed: '',
    dateResponse: ''
  });

  // Update state
  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <PageTitle title="Create Cohort Application Form" />
      <form action="">
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
      </form>
    </div>
  );
}
