import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputElement = styled.input`
  padding: ${props => props.theme.padding};
  margin: ${props => props.theme.margin} 0;
  color: ${props => props.theme.black};
  background: ${props => props.theme.inputBackground};
  border: ${props => props.theme.borderWidth} solid ${props => props.theme.borderColor};
  border-radius: ${props => props.theme.borderRadius};
  display: block;
  width: 100%;
`;

const TextareaElement = styled.textarea`
  padding: ${props => props.theme.padding};
  margin: ${props => props.theme.margin} 0;
  color: ${props => props.theme.black};
  background: ${props => props.theme.inputBackground};
  border: ${props => props.theme.borderWidth} solid ${props => props.theme.borderColor};
  border-radius: ${props => props.theme.borderRadius};
  display: block;
  border-radius: ${props => props.theme.borderRadius};
  width: 100%;
`;

export default function Input({ label, name, type, value }) {
  const [input, setInput] = useState(value);
  return (
    <div>
      <label htmlFor={name}>
        {label}
        {type === 'textarea' 
          ? <TextareaElement 
              id={name} 
              name={name}
              value={input}
              rows="3"
              onChange={e => setInput(e.target.value)} />
          : <InputElement 
              id={name} 
              name={name} 
              type={type} 
              value={input}
              onChange={e => setInput(e.target.value)}
            />
        }
      </label>
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string
};
