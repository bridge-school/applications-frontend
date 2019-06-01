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
`;

const RadioButton = styled.input.attrs({ type: 'radio' })`
  ${'' /* todo: styling */}
`;

const Legend = styled.legend`
  padding: ${props => props.theme.padding};
`;

export default function Radio({ description, name, items }) {
  return (
    <div>
      <Fieldset>
        <Legend> {description}</Legend>
        {items.map(item => (
          <RadioLabel key={item}>
            {item}
            <RadioButton type="radio" id={item} name={name} value={item} />
          </RadioLabel>
        ))}
      </Fieldset>
    </div>
  );
}

Radio.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};