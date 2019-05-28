import React from 'react';
import PageTitle from './PageTitle';
import ApplicationListContainer from './ApplicationListContainer';

export default function AllApplications() {
  return (
    <div>
      <PageTitle title="Cohort Application Form" />
      <ApplicationListContainer></ApplicationListContainer>
    </div>
  );
}
