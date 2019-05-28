import React from 'react';
import PageTitle from './PageTitle';
import ListContainer from './ListContainer';

export default function AllApplications() {
  return (
    <div>
      <PageTitle title="Cohort Application Form" />
      <p>List of applications...</p>
      <ListContainer></ListContainer>
    </div>
  );
}
