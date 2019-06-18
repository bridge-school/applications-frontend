import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export default function ListContainer({ cohortData }) {
  return (
    <List data-cy="cohort-forms">
      {cohortData.map(li => (
        <ListItem
          key={li.id}
          id={li.id}
          name={li.cohortName}
          type={li.cohortType}
          url={li.cohortSlug}
        />
      ))}
    </List>
  );
}

ListContainer.propTypes = {
  cohortData: PropTypes.array.isRequired,
};
