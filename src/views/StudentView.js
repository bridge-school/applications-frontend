import React from 'react';
import PageTitle from '../components/PageTitle';
import ListContainer from '../components/ListContainer';
import { useFetch } from '../hooks/fetch';

export default function StudentView() {
  const url = 'http://applications-backend.bridgeschoolapp.io/applications';
  const [data, loading] = useFetch(url);
  return (
    <div>
      <PageTitle title="Cohort Application Forms" />
      {loading ? <div>loading</div> : <ListContainer cohortData={data} />}
    </div>
  );
}
