import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputElement = styled.input`
  padding: ${props => props.theme.padding};
  margin: ${props => props.theme.margin} 0;
  color: ${props => props.theme.black};
  background: ${props => props.theme.inputBackground};
  border: ${props => props.theme.borderWidth} solid
    ${props => props.theme.borderColor};
  border-radius: ${props => props.theme.borderRadius};
  display: block;
  width: 100%;
`;

const TextareaElement = styled.textarea`
  padding: ${props => props.theme.padding};
  margin: ${props => props.theme.margin} 0;
  color: ${props => props.theme.black};
  background: ${props => props.theme.inputBackground};
  border: ${props => props.theme.borderWidth} solid
    ${props => props.theme.borderColor};
  border-radius: ${props => props.theme.borderRadius};
  display: block;
  border-radius: ${props => props.theme.borderRadius};
  width: 100%;
`;

export default function Input({
  label,
  name,
  type,
  value,
  handleChange,
  required,
}) {
  return (
    <label htmlFor={name}>
      {label}
      {required && '*'}
      {type === 'textarea' ? (
        <TextareaElement
          id={name}
          name={name}
          value={value}
          required={required}
          rows="3"
          onChange={handleChange}
        />
      ) : (
        <InputElement
          id={name}
          name={name}
          type={type}
          required={required}
          value={value}
          onChange={handleChange}
        />
      )}
    </label>
  );
}

Input.propTypes = {
  index: PropTypes.number,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
};
