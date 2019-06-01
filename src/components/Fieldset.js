import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Fieldset = styled.fieldset`
  border: none;
`;

const CheckboxLabel = styled.label`
  border: 2px solid ${props => props.theme.darkGrey};
  border-radius: 5px;
  padding: ${props => props.theme.padding};
`;

const Legend = styled.legend`
  padding: ${props => props.theme.padding};
`;

export default function Checkbox() {
  const data = {
    description: 'A Multiple choice question.',
    type: 'checkbox',
    items: [
      {
        label: 'Option a',
        value: 'A',
      },
      {
        label: 'Option b',
        value: 'B',
      },
      {
        label: 'Option c',
        value: 'C',
      },
      {
        label: 'Option d',
        value: 'D',
      },
    ],
  };

  return (
    <div>
      <Fieldset>
        <Legend> {data.description}</Legend>
        {data.items.map(item => (
          <CheckboxLabel key={item.value}>
            {item.label}
            <input type="checkbox" value={item.value} />
          </CheckboxLabel>
        ))}
      </Fieldset>
    </div>
  );
}

Checkbox.propTypes = {
  data: PropTypes.object.isRequired,
};
