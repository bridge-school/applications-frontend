import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import bridgeTheme from '../styles/bridgeTheme';

const ButtonElem = styled.button`
  border-radius: ${p => p.theme.borderRadius};
  padding: 0.5em;
  color: white;
  text-align: center;
  font-weight: bold;
  width: ${p => p.width || '24em'};
  font-size: 1rem;
  background: ${bridgeTheme.green};
  border: 3px solid ${bridgeTheme.green};
  text-transform: uppercase;
  &:hover {
    color: ${bridgeTheme.green};
    background: white;
  }
`;

export default function Button(props) {
  return <ButtonElem {...props}>{props.text}</ButtonElem>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  width: PropTypes.string,
};
