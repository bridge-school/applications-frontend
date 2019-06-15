import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  font-family: ${p => p.theme.serif};
  font-style: italic;
  text-decoration: none;
  color: ${p => p.theme.green};
  margin: 2em;
  display: block;
  &:hover {
    color: ${p => p.theme.blue};
  }
`;

export default function BackToHomeLink() {
  return <StyledLink to="/">Back to homepage</StyledLink>;
}
