import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputDateElement = styled.input`
  padding: ${props => props.theme.padding};
  margin: ${props => props.theme.margin} 0;
  color: ${props => props.theme.black};
  background: ${props => props.theme.inputBackground};
  border: ${props => props.theme.borderWidth} solid ${props => props.theme.borderColor};
  border-radius: ${props => props.theme.borderRadius};
  display: block;
`;

export default function InputDate({ label, name, value, handleChange }) {
  return (
    <div>
      <label htmlFor={name}>
        {label}
        <InputDateElement 
          id={name} 
          name={name} 
          value={value} 
          type="date" 
          onChange={e => handleChange(e)}
        />
      </label>
    </div>
  );
}

InputDate.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func
};
