import React from 'react';
import styled from 'styled-components';

const HR = styled.hr`
  width: 4em;
  border: 2px solid ${p => p.theme.green};
  margin: 0.5em auto;
  display: block;
`;

export default function HorizontalRule() {
  return <HR />;
}
