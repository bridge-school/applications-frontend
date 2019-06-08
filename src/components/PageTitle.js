import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h2`
  font-size: 1.75rem;
  letter-spacing: -0.5px;
  font-weight: 800;
  margin: 0;
`;

export default function PageTitle({ title }) {
  return <Title>{title}</Title>;
}

PageTitle.propTypes = {
  title: PropTypes.string,
};
