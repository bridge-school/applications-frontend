import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonElem = styled.button`
  border-radius: ${p => p.theme.borderRadius};
  padding: 0.5em;
  color: white;
  text-align: center;
  font-weight: bold;
  width: ${p => p.width || '24em'};
  font-size: ${p => (p.uppercase ? '1rem' : '.8rem')};
  background: ${p => p.backgroundColor};
  border: 3px solid ${p => p.backgroundColor};
  text-transform: ${p => (p.uppercase ? 'uppercase' : 'lowercase')};
  &:hover {
    color: ${p => p.backgroundColor};
    background: white;
  }
`;

export default function Button(props) {
  return <ButtonElem {...props} onClick={props.handleClick}>{props.text}</ButtonElem>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  width: PropTypes.string,
  uppercase: PropTypes.bool,
  handleClick: PropTypes.func
};
