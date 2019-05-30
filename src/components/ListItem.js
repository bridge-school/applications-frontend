import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';

const LI = styled.li`
  background-color: ${props => props.theme.grey};
  padding: ${props => props.theme.padding};
  margin: 0.2rem 0;
  font-weight: bold;
  border-radius: 5px;
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
        <Button text={type} />
      </Link>
    </LI>
  );
}

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
