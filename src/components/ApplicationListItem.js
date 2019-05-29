import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ListItem = styled.li`
  background-color: ${props => props.theme.grey};
  padding: ${props => props.theme.padding};
  margin: 0.2rem 0;
  font-weight: bold;
  border-radius: 5px;
`;

const Link = styled.a`
  display: flex;
  justify-content: space-between;
  color: black;
  text-decoration: none;
  } */}
`;

export default function ApplicationListItem({ data }) {
  return (
    <ListItem>
      <Link href="#">
        [cohort_name]<div>[button component with cohort_type and color]</div>
      </Link>
    </ListItem>
  );
}

ApplicationListItem.propTypes = {
  data: PropTypes.object,
};
