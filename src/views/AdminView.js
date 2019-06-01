import React from 'react';
import PageTitle from '../components/PageTitle';
import Button from '../components/Button';
import styled from 'styled-components';
import bridgeTheme from '../styles/bridgeTheme';

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
    </div>
  );
}
