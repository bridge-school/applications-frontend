import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  margin: 1.5em 0;
`;

const InputElement = styled.input`
  padding: 0.55em;
  display: block;
  width: 100%;
`;

const TextareaElement = styled.textarea`
  display: block;
  width: 100%;
  padding: 0.6em;
`;

export default function Input({
  label,
  name,
  type,
  value,
  handleChange,
  required,
  autofocus,
}) {
  return (
    <Container>
      <label htmlFor={name}>
        {label}
        {required && '*'}
        {type === 'textarea' ? (
          <TextareaElement
            id={name}
            name={name}
            value={value || ''}
            required={required}
            rows="3"
            autofocus={autofocus}
            onChange={handleChange}
          />
        ) : (
          <InputElement
            id={name}
            name={name}
            autofocus={autofocus}
            type={type}
            required={required}
            value={value || ''}
            onChange={handleChange}
          />
        )}
      </label>
    </Container>
  );
}

Input.propTypes = {
  index: PropTypes.number,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  required: PropTypes.bool,
  autofocus: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};
