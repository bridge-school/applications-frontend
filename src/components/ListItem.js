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

const CohortName = styled.span`
  flex: 1 1;
`;

const CohortLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  text-decoration: none;
  @media (max-width: 550px) {
    flex-wrap: wrap;
    div:last-of-type {
      width: 100%;
      margin-top: 0.5em;
    }
  }
`;

const DateWrapper = styled.div`
  font-size: 14px;
  padding: 0 1em;
  flex: 1 1;
`;

export default function ListItem({ name, type, url, id, dateClosed }) {
  return (
    <LI>
      <CohortLink to={{ pathname: `apply/${url}`, state: { id } }}>
        <CohortName>{name}</CohortName>
        {dateClosed && (
          <DateWrapper className="admin-dates-wrapper">
            <span>{dateClosed}</span>
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
