import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Fieldset = styled.fieldset`
  border: none;
  padding: 0;
`;

const RadioLabel = styled.label`
  border: 2px solid ${props => props.theme.darkGrey};
  border-radius: 5px;
  padding: ${props => props.theme.padding};
  margin: ${props => props.theme.padding};
  &:first-of-type {
    margin-left: 0;
  }
  &:last-of-type {
    margin-right: 0;
  }
  text-align: center;
  color: ${props => props.theme.darkGrey};
  display: inline-block;
  width: 100%;
  cursor: pointer;
  &:hover {
    color: white;
    background: ${props => props.theme.green};
    border-color: ${props => props.theme.green};
  }
`;

const RadioButton = styled.input`
  /* for accessibility */
  opacity: 0;
  display: none;
  &:checked + label {
    color: white;
    background: ${props => props.theme.green};
    border-color: ${props => props.theme.green};
  }
`;

const Container = styled.div`
  display: flex;
  div {
    flex: 1 1 0;
    margin-right: 1rem;
    &:last-of-type {
      margin: 0;
    }
  }
`;

const Legend = styled.legend``;

export default function Radio({
  name,
  description,
  items,
  handleChange,
  required,
}) {
  return (
    <div>
      <Fieldset>
        <Legend>
          {' '}
          {description}
          {required && '*'}
        </Legend>
        <Container>
          {items.map(item => (
            <React.Fragment key={item.value}>
              <RadioButton
                type="radio"
                id={item.value}
                name={name}
                value={item}
                required={required}
                onChange={handleChange}
              />
              <RadioLabel htmlFor={item.value}>{item.label}</RadioLabel>
            </React.Fragment>
          ))}
        </Container>
      </Fieldset>
    </div>
  );
}

Radio.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  required: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
};
