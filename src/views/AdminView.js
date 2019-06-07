import React from 'react';
import PageTitle from '../components/PageTitle';
import styled from 'styled-components';
import { useFetch } from '../hooks/fetch';
import { Link } from 'react-router-dom'; 

import ListContainer from '../components/ListContainer';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 0 0 3rem 0;
`;

export default function AdminView() {
  const url = 'http://applications-backend.bridgeschoolapp.io/applications';
  const [data, loading] = useFetch(url);
  return (
    <div>
      <Header>
        <PageTitle title="Cohort Application Forms" />
        <Link to="/admin/create" className="button-style" title="create application group">
          Create application group
        </Link>
      </Header>
      {loading ? <div>loading</div> : <ListContainer cohortData={data} />}
    </div>
  );
}
