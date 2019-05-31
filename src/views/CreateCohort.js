import React from 'react';
import PageTitle from '../components/PageTitle';
import InputDate from '../components/InputDate';
import Input from '../components/Input';

export default function CreateCohort() {
  return (
    <div>
      <PageTitle title="Create Cohort Application Form" />
      <form action="" method="post">
        <InputDate name="test" value="" label="Date Input" />
        <Input name="text-input" type="text" value="" label="Text Input" />
        <Input name="textarea-input" type="textarea" value="" label="Textarea Input" />
      </form>
    </div>
  );
}
