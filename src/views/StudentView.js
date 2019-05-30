import React from 'react';
import PageTitle from '../components/PageTitle';
import InputDate from '../components/InputDate';

export default function StudentView() {
  return (
    <div>
      <PageTitle title="Cohort Application Forms" />
      <InputDate type="text" name="test" value="" label="Text Input" />
      <p>STUDENT VIEW...</p>
    </div>
  );
}
