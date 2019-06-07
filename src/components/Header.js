import React from 'react';
import styled from 'styled-components';
import logo from '../images/bridge-logo.svg';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TopBar = styled.header`
  background: ${props => props.theme.indigo};
  color: white;
  font-weight: bold;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: ${props => props.theme.padding};
  max-width: 64rem;
  margin: 0 auto;
  padding: 0.5rem 1rem;
`;

const Logo = styled.img`
  height: 2rem;
  margin: 0.25rem 3rem 0.25rem 0;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  margin: 0;
`;

const Admin = styled.p`
  margin-left: auto;
  font-size: 0.8rem;
`;

export default function Header({ admin }) {
  return (
    <TopBar>
      <Wrapper>
        <Link to="/" title="Bridge home">
          <Logo src={logo} alt="Bridge Logo" />
        </Link>
        <Title>Cohort Application</Title>
        {admin && <Admin>Admin View</Admin>}
      </Wrapper>
    </TopBar>
  );
}

Header.propTypes = {
  admin: PropTypes.bool,
};
