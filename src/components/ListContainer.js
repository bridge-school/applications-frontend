import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export default function ListContainer() {
  const cohortData = [
    {
      cohort_id: 'b159c1e3-3d97-4f34-8755-3745e73a2762',
      cohort_name: 'Cohort 0',
      cohort_type: 'frontend',
      cohort_slug: 'cohort-0-frontend',
      date_open: '2019-05-25T14:34:52.778Z',
      date_closed: '2019-05-25T14:34:52.778Z',
      date_response: '2019-05-25T14:34:52.778Z',
    },
    {
      cohort_id: '4f6ead02-7aab-4e97-977e-442f4845aec7',
      cohort_name: 'Cohort 3',
      cohort_type: 'design',
      cohort_slug: 'cohort-3-design',
      date_open: '2019-03-25T14:34:52.778Z',
      date_closed: '2019-03-25T14:34:52.778Z',
      date_response: '2019-03-25T14:34:52.778Z',
    },
    {
      cohort_id: '2f531e50-925b-49f7-8194-9576b2ff3cf1',
      cohort_name: 'Cohort 9',
      cohort_type: 'backend',
      cohort_slug: 'cohort-9-backend',
      date_open: '2020-03-25T14:34:52.778Z',
      date_closed: '2020-03-25T14:34:52.778Z',
      date_response: '2020-03-25T14:34:52.778Z',
    },
  ];
  return (
    <List>
      {cohortData.map(li => (
        <ListItem
          key={li.cohort_id}
          name={li.cohort_name}
          type={li.cohort_type}
          url={li.cohort_slug}
        />
      ))}
    </List>
  );
}

ListContainer.propTypes = {
  cohortData: PropTypes.array.isRequired,
};
