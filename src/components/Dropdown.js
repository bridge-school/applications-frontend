import React from 'react';
import styled from 'styled-components';
import caret from '../images/caret.svg';
import PropTypes from 'prop-types';

const SelectBox = styled.select`
  appearance: none;
  padding: 0.5rem 2rem 0.5rem 1rem;
  background-image: url(${caret});
  background-repeat: no-repeat, repeat;
  background-position: right 0.4rem top 54%, 0 0;
  background-size: 1rem auto, 100%;
  width: 100%;
`;
export default function Dropdown({
  required,
  items,
  handleChange,
  name,
  value,
  description,
}) {
  return (
    <div>
      <label>
        {required ? `${description}*` : description}
        <br />
        <SelectBox
          required={required}
          name={name}
          onChange={handleChange}
          value={value}
        >
          <option value="" />
          {items.map(item => (
            <option key={items.indexOf(item)} value={item.value}>
              {item.label}
            </option>
          ))}
        </SelectBox>
      </label>
    </div>
  );
}

Dropdown.propTypes = {
  description: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
