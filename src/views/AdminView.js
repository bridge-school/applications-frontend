import React from 'react';
import PageTitle from '../components/PageTitle';
import Button from '../components/Button';
import styled from 'styled-components';
import bridgeTheme from '../styles/bridgeTheme';
import { useFetch } from '../hooks/fetch';
import { Link } from 'react-router-dom';
import ListContainer from '../components/ListContainer';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export default function AdminView() {
  const url = 'http://applications-backend.bridgeschoolapp.io/applications';
  const [data, loading] = useFetch(url);
  return (
    <div>
      <Header>
        <PageTitle title="Cohort Application Forms" />
        <Link to="/admin/create">
          <Button
            text="create application group"
            uppercase
            backgroundColor={bridgeTheme.green}
          />
        </Link>
      </Header>
      {loading ? <div>loading</div> : <ListContainer cohortData={data} />}
    </div>
  );
}
