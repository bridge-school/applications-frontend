import React from 'react';
import PageTitle from '../components/PageTitle';
import ListContainer from '../components/ListContainer';
import { useFetch } from '../hooks/fetch';
import styled from 'styled-components';

import Checkbox from '../components/CheckBox';

const Header = styled.header`
  margin: 0 0 3rem 0;
`;

export default function StudentView() {
  const url = 'http://applications-backend.bridgeschoolapp.io/applications';
  const [data, loading] = useFetch(url);
  return (
    <div>
      <Header>
        <PageTitle title="Cohort Application Forms" />
      </Header>
      <Checkbox
        name={`test`}
        data={{
          description: 'Is required?',
          type: 'checkbox',
          items: [
            {
              label: 'option 1',
              value: 'test',
              handleChange: 'test',
            },
            {
              label: 'option 2',
              value: 'test',
              handleChange: 'test',
            },
            {
              label: 'option 3',
              value: 'test',
              handleChange: 'test',
            },
          ],
        }}
      />

      <Checkbox
        name={`test`}
        data={{
          description: 'Is required?',
          type: 'checkbox',
          items: [
            {
              label: 'option 1',
              value: 'test',
              handleChange: 'test',
            },
          ],
        }}
      />
      {loading ? <div>loading</div> : <ListContainer cohortData={data} />}
    </div>
  );
}
