import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CohortLabel from './CohortLabel';

const LI = styled.li`
  background-color: ${props => props.theme.grey};
  padding: 0.75em 1.5em;
  margin: 0.2rem 0;
  font-weight: bold;
  border-radius: 5px;
  &:hover,
  &:focus {
    background-color: ${props => props.theme.indigo};
    a {
      color: white;
    }
  }
`;

const Link = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  text-decoration: none;
`;

export default function ListItem({ name, type, url }) {
  return (
    <LI>
      <Link href={'apply/' + url}>
        {name}
        <CohortLabel text={type} width="150px" uppercase />
      </Link>
    </LI>
  );
}

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
