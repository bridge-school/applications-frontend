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

export default function Checkbox({ name, data }) {
  data = data ? data : {
    description: 'A Multiple choice question.',
    type: 'checkbox',
    items: [
      {
        label: 'Option a',
        value: 'A',
        handleChange: {}
      },
      {
        label: 'Option b',
        value: 'B',
        handleChange: {}
      },
      {
        label: 'Option c',
        value: 'C',
        handleChange: {}
      },
      {
        label: 'Option d',
        value: 'D',
        handleChange: {}
      },
    ],
  };

  return (
    <div>
      <Fieldset>
        <Legend> {data.description}</Legend>
        {data.items.map((item, index) => (
          <CheckboxLabel key={index}>
            {item.label}
            <input 
              name={name}
              type={data.type} 
              checked={item.value} 
              value={item.value}
              onChange={item.handleChange}
            />
          </CheckboxLabel>
        ))}
      </Fieldset>
    </div>
  );
}

Checkbox.propTypes = {
  name: PropTypes.string,
  data: PropTypes.object.isRequired
};
