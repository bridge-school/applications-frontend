import React from 'react';
import PageTitle from '../components/PageTitle';
import InputDate from '../components/InputDate';

export default function CreateCohort() {
  return (
    <div>
      <PageTitle title="Create Cohort Application Form" />
      <form action="" method="post">
        <InputDate name="test" value="" label="Date Input" />
      </form>
    </div>
  );
}
