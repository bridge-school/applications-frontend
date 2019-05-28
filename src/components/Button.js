import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonElem = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  font-size: 0.8rem;
  background: #22c29d;
  color: white;
  border: 2px solid #22c29d;
`;

export default function Button({ text }) {
  return <ButtonElem>{text}</ButtonElem>;
}

ButtonElem.propTypes = {
  text: PropTypes.string,
};