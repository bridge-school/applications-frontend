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
    <List>
      {cohortData.data.map(li => (
        <ListItem
          key={li.id}
          name={li.cohort_name}
          type={li.cohort_type}
          url={li.cohort_slug}
        />
      ))}
    </List>
  );
}

ListContainer.propTypes = {
  cohortData: PropTypes.object.isRequired,
};
