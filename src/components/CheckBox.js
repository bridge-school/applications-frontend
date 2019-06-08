import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Legend = styled.legend`
  font-size: 0.8em;
  font-weight: bold;
`;

const Container = styled.div`
  padding: ${props => props.theme.padding};
`;

const GroupContainer = styled.div`
  padding: ${props => props.theme.padding};
  display: flex;
  flex-direction: row;
  flex: 1 1 0;
`;

const CheckboxLabel = styled.label`
  padding: ${props => props.theme.padding};
  display: flex;
  flex-direction: column-reverse;
  white-space: nowrap;
  &::before {
    content: '\\2714';
    color: white;
    font-size: 1.3em;
    padding: 0.5rem;
    padding-top: 0.25rem;
    border-radius: 5px;
    border: solid black;
    display: inline-block;
    width: 2em;
    height: 2em;
    margin-right: 0.2em;
    text-align: center;
  }
`;

const CheckboxInput = styled.input`
  padding: ${props => props.theme.padding};
  cursor: pointer;
  opacity: 0;
  position: relative;
  top: 2em;
  &:checked + label::before {
    background: ${props => props.theme.green};
    border: solid ${props => props.theme.green};
  }
  ${'' /* to do: move these styles to keep this DRY */}
  &::before {
    content: '\\2714';
    color: white;
    font-size: 1.3em;
    padding: 0.5rem;
    margin-top: 0.25rem;
    border-radius: 5px;
    border: solid black;
    display: inline-block;
    width: 2em;
    height: 2em;
    margin-right: 0.2em;
    text-align: center;
  }
  &:focus + label::before {
    outline: rgb(59, 153, 252) auto 5px;
  }
`;

const Fieldset = styled.fieldset`
  border: none;
  label {
    display: inline-block;
  }
  input {
    position: unset;
    top: unset;
  }
`;

export default function Checkbox({ name, data }) {
  const checkboxes = data.items.map(item => (
    <Container key={item.value}>
      <CheckboxInput type="checkbox" value={item.value} name={name} />
      <CheckboxLabel key={item.value}>{item.label}</CheckboxLabel>
    </Container>
  ));

  if (data.items.length > 1) {
    return (
      <Fieldset>
        <Legend>{data.description}</Legend>
        <GroupContainer> {checkboxes} </GroupContainer>
      </Fieldset>
    );
  } else {
    return checkboxes;
  }
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};
