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
const Option = styled.option``;

export default function Dropdown() {
  return (
    <div>
      <SelectBox>
        <Option>tejhgigiggyligst</Option>
        <Option>test1</Option>
        <Option>test2</Option>
      </SelectBox>
    </div>
  );
}

Dropdown.propTypes = {};
