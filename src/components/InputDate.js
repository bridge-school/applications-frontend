import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputDateElement = styled.input`
  padding: ${props => props.theme.padding};
  margin-top: 0.25em;
  display: block;
`;

export default function InputDate({
  label,
  name,
  value,
  required,
  handleChange,
}) {
  return (
    <div>
      <label htmlFor={name}>
        {label}
        {required && '*'}
        <InputDateElement
          id={name}
          name={name}
          required={required}
          value={value}
          type="date"
          onChange={e => handleChange(e)}
        />
      </label>
    </div>
  );
}

InputDate.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
};
