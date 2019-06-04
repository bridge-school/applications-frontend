import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Label = styled.div`
  border-radius: ${p => p.theme.borderRadius};
  padding: 0.5em;
  color: white;
  text-align: center;
  width: 16em;
  font-size: 0.8rem;
  background: ${p => p.backgroundColor};
  border: 3px solid ${p => p.backgroundColor};
  text-transform: lowercase;
`;

function getColor(type) {
  let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  switch (type) {
    case 'backend':
      return '#00A1D7';
    case 'frontend':
      return '#FF0093';
    case 'design':
      return '#00CC9F';
    default:
      return randomColor;
  }
}

export default function CohortLabel(props) {
  return (
    <Label {...props} backgroundColor={getColor(props.text)}>
      {props.text}
    </Label>
  );
}

CohortLabel.propTypes = {
  text: PropTypes.string.isRequired,
  width: PropTypes.string,
  uppercase: PropTypes.bool,
};
