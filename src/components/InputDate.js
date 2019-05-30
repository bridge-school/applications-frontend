import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Label = styled.label`

`;

const InputDateElement = styled.input`
  padding: ${props => props.theme.padding};
  margin: 0.5em;
  color: ${props => props.theme.black};
  background: #f6f6f6;
  border: 2px solid #979797;
  border-radius: ${props => props.theme.borderRadius};
`;

export default function InputDate({ label, name }) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <InputDateElement id={name} name={name} type="date" />
    </div>
  );
}

InputDate.propTypes = {
  label: PropTypes.string,
  name: PropTypes.name
};
