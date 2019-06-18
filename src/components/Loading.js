import React from 'react';
import loading from '../images/loading.svg';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: calc(100% - 100px);
  left: 0;
  position: absolute;
  display: block;
  background: rgba(255, 255, 255, 0.8);
  z-index: 10;
`;

const LoadingIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  height: 48px;
  width: 48px;
  display: block;
  background-image: url(${loading});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  p {
    ${'' /* for accessibility */}
    position: absolute;
    left: -1000px;
  }
`;

export default function Loading() {
  return (
    <Container>
      <LoadingIcon>
        <p role="alert" aria-live="polite">
          Loading...
        </p>
      </LoadingIcon>
    </Container>
  );
}
