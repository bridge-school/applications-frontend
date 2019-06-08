import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const checkBoxSize =
  'content: "\\2714"; display: inline-block;width: 2em; height: 2em; padding-top: 0.25rem; margin-top: 0.25rem;';

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
    color: ${props => props.theme.grey};
    font-size: 1.3em;
    padding: ${props => props.theme.padding};
    margin-right:${props => props.theme.padding} 
    border-radius: ${props => props.theme.borderRadius};
    border: ${props => props.theme.border};
    background: ${props => props.theme.grey};
    text-align: center;
    ${checkBoxSize}
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
    color: white;
  }
  &:before {
    padding: ${props => props.theme.padding};
    margin-right: ${props => props.theme.padding};
    margin-left: 1rem;
    ${checkBoxSize};
  }
  &:focus + label::before {
    outline: #3b99fc auto 5px;
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
