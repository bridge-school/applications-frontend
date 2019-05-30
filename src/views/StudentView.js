import React from 'react';
import PageTitle from '../components/PageTitle';
import InputDate from '../components/InputDate';

export default function StudentView() {
  return (
    <div>
      <PageTitle title="Cohort Application Forms" />
      <InputDate name="test" value="" label="Date Input" />
      <p>STUDENT VIEW...</p>
    </div>
  );
}
