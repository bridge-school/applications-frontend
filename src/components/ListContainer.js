import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export default function ListContainer({ isAdmin, cohortData }) {
  return (
    <List data-cy="cohort-forms">
      {cohortData.map(li => {
        if (!isAdmin) {
          return (
            <ListItem
              key={li.id}
              id={li.id}
              name={li.cohortName}
              type={li.cohortType}
              url={li.cohortSlug}
            />
          );
        } else {
          return (
            <ListItem
              key={li.id}
              id={li.id}
              name={li.cohortName}
              type={li.cohortType}
              url={li.cohortSlug}
              dateOpen={li.dateOpen}
              dateClosed={li.dateClosed}
              dateResponse={li.dateResponse}
            />
          );
        }
      })}
    </List>
  );
}

ListContainer.propTypes = {
  cohortData: PropTypes.array.isRequired,
  isAdmin: PropTypes.bool,
};
