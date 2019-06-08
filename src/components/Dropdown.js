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

export default function Dropdown({ data, handleChange, value }) {
  return (
    <label>
      {data.description}
      <br />
      <SelectBox onChange={handleChange} value={value}>
        <option value="">{data.placeholder}</option>
        {data.items.map(item => (
          <option key={data.items.indexOf(item)} value={item.value}>
            {item.label}
          </option>
        ))}
      </SelectBox>
    </label>
  );
}

Dropdown.propTypes = {
  data: PropTypes.object.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};
