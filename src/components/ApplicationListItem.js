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

export default function ApplicationListItem({ name }) {
  return (
    <ListItem>
      <Link href="#">
        {name}
        <div>button component...</div>
      </Link>
    </ListItem>
  );
}

ApplicationListItem.propTypes = {
  name: PropTypes.string.isRequired,
};
