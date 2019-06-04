import React from 'react';
import PageTitle from '../components/PageTitle';
import Button from '../components/Button';
import styled from 'styled-components';
import bridgeTheme from '../styles/bridgeTheme';
import Checkbox from '../components/CheckBox';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export default function AdminView() {
  return (
    <div>
      <Header>
        <PageTitle title="Cohort Application Forms" />
        <Button
          text="create application group"
          uppercase
          backgroundColor={bridgeTheme.green}
        />
      </Header>
      <p>List of ALL applications for Admin...</p>
      <Checkbox
        description="Answer this question."
        items={[
          {
            label: 'Option a',
            value: 'A',
          },
          {
            label: 'Option b',
            value: 'B',
          },
          {
            label: 'Option c',
            value: 'C',
          },
          {
            label: 'Option d',
            value: 'D',
          },
        ]}
      />
    </div>
  );
}
