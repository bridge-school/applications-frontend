import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Fieldset = styled.fieldset`
  border: none;
`;

const RadioLabel = styled.label`
  border: 2px solid ${props => props.theme.darkGrey};
  border-radius: 5px;
  padding: ${props => props.theme.padding};
  text-align: center;
  color: ${props => props.theme.darkGrey};
  display: inline-block;
  width: 100%;
  cursor: pointer;
  &:hover {
    color: white;
    background: ${props => props.theme.indigo};
    border-color: ${props => props.theme.indigo};
  }
`;

const RadioButton = styled.input`
  /* for accessibility */
  opacity: 0;
  &:checked + label {
    color: white;
    background: ${props => props.theme.indigo};
    border-color: ${props => props.theme.indigo};
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

const Legend = styled.legend`
  padding: ${props => props.theme.padding};
`;

export default function Radio({ description, name, items }) {
  return (
    <div>
      <Fieldset>
        <Legend> {description}</Legend>
        <Container>
          {items.map(item => (
            <React.Fragment key={item}>
              <RadioButton type="radio" id={item} name={name} value={item} />
              <RadioLabel htmlFor={item}>{item}</RadioLabel>
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
};
