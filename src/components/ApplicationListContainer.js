import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ListItem from './ApplicationListItem';

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export default function ApplicationListContainer({ listItemArray }) {
  return (
    <List>
      {listItemArray.map(li => (
        <ListItem key={li.cohort_id} name={li.cohort_name} />
      ))}
    </List>
  );
}

ApplicationListContainer.propTypes = {
  listItemArray: PropTypes.array.isRequired,
};
