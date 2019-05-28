import React from 'react';
import PageTitle from './PageTitle';
import ApplicationListContainer from './ApplicationListContainer';

export default function AllApplications() {
  return (
    <div>
      <PageTitle title="Cohort Application Form" />
      <ApplicationListContainer listItemArray={[
          {
            cohort_id: "b159c1e3-3d97-4f34-8755-3745e73a2762",
            cohort_name: "Cohort 0",
           }, 
           {
            "cohort_id": "4f6ead02-7aab-4e97-977e-442f4845aec7",
            "cohort_name": "Cohort 3",
           }
          ]}>

        </ApplicationListContainer>
    </div>
  );
}
