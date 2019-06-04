import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Fieldset = styled.fieldset`
  border: none;
`;

const Container = styled.div`
  ${'' /* display: flex;
  div {
    flex: 1 1 0;
    margin-right: 1rem;
    &:last-of-type {
      margin: 0;
    }
  } */}
`;

const CheckboxLabel = styled.label`
  ${
    '' /* border: 2px solid ${props => props.theme.darkGrey};
  border-radius: 5px; */
  }
  padding: ${props => props.theme.padding};
`;

const CheckboxInput = styled.div`
  ${'' /* opacity: 0; */}
  color: white;
  width: 25px;
  height: 25px;
  border-radius: 5px;
  background: ${props => props.theme.indigo};
  border-color: ${props => props.theme.indigo};
  &:checked + label {
    opacity: 0;
    color: white;
    background: ${props => props.theme.indigo};
    border-color: ${props => props.theme.indigo};
  }
`;

const Legend = styled.legend`
  padding: ${props => props.theme.padding};
`;

export default function Checkbox({ description, name, items }) {
  const checkboxes = items.map(item => (
    <Container key={item.value}>
      <CheckboxLabel key={item.value}>{item.label}</CheckboxLabel>
      <CheckboxInput>
        <input type="checkbox" value={item.value} name={name} />
      </CheckboxInput>
    </Container>
  ));

  if (items.length > 1) {
    return (
      <Fieldset>
        <Legend>{description}</Legend>
        <Container>{checkboxes}</Container>
      </Fieldset>
    );
  } else {
    return checkboxes;
  }
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  items: PropTypes.array.isRequired,
};
