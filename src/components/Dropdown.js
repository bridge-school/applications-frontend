import React from 'react';
import styled from 'styled-components';
import caret from '../images/caret.svg';
import PropTypes from 'prop-types';

const SelectBox = styled.select`
  appearance: none;
  background-color: transparent;
  padding: 0.5rem 2rem 0.5rem 1rem;
  background-image: url(${caret});
  background-repeat: no-repeat, repeat;
  background-position: right 0.4rem top 54%, 0 0;
  background-size: 1rem auto, 100%;
`;

const data = {
  description: 'Random Multiple choice question.',
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
  ],
};

export default function Dropdown({}) {
  {
    const data = {
      description: 'Random Multiple choice question.',
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
      ],
    };
  }
  return (
    <div>
      <label>
        {data.description}
        <br />
        <SelectBox>
          <option value="" />
          {data.items.map(item => (
            <option key={data.items.indexOf(item)} value={item.value}>
              {item.label}
            </option>
          ))}
        </SelectBox>
      </label>
    </div>
  );
}

Dropdown.propTypes = {
  data: PropTypes.object.isRequired,
};
