import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CohortLabel from './CohortLabel';
import { Link } from 'react-router-dom';

const LI = styled.li`
  background-color: ${props => props.theme.grey};

  margin: 0.2rem 0;
  font-weight: bold;
  font-size: 120%;
  border-radius: ${props => props.theme.borderRadius};
  a {
    padding: 0.75em 1.5em;
  }
  &:hover,
  &:focus {
    background-color: ${props => props.theme.indigo};
    a {
      color: white;
    }
  }
`;

const CohortLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  text-decoration: none;
`;

const DateWrapper = styled.div`
  font-size: 14px;

  @media (max-width: 650px) {
    span {
      white-space: pre;
    }
  }
`;

export default function ListItem({ name, type, url, id, dateClosed }) {
  return (
    <LI>
      <CohortLink to={{ pathname: `apply/${url}`, state: { id } }}>
        <span className="cohort-name">{name}</span>
        {dateClosed && (
          <DateWrapper className="admin-dates-wrapper">
            <span>
              Close date:{'\n'}
              {dateClosed}
            </span>
          </DateWrapper>
        )}
        <CohortLabel text={type} />
      </CohortLink>
    </LI>
  );
}

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  dateClosed: PropTypes.string,
};
