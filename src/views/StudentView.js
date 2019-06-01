import React from 'react';
import PageTitle from '../components/PageTitle';
import Radio from '../components/Radio';

export default function StudentView() {
  return (
    <div>
      <PageTitle title="Cohort Application Forms" />
      <p>STUDENT VIEW...</p>
      <Radio
        name="pronouns"
        description="What pronouns should we use?"
        items={['He/Him', 'She/Her', 'They/Them']}
        value=""
      />
    </div>
  );
}
