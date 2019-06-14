import React from 'react';
import PageTitle from './PageTitle';
import BackToHomeLink from './BackToHomeLink';
import HorizontalRule from './HorizontalRule';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Page = styled.div`
  text-align: center;
  margin-top: 30%;
  h2 {
    color: ${p => p.theme.indigo};
    font-size: 2.25rem;
    font-weight: bold;
  }
  p {
    font-size: 150%;
  }
  a {
    margin-top: 3.5em;
  }
`;

const Emoji = styled.span`
  font-size: 400%;
  margin: 1em;
  display: block;
`;

export default function Congrats({ cohortInfo }) {
  const { cohortDisplayName, dateResponse } = cohortInfo;
  return (
    <Page>
      <PageTitle title="Congratulations!" />
      <HorizontalRule />
      <Emoji>🎉</Emoji>
      <p>
        You have successfully applied for <strong>{cohortDisplayName}</strong>.
      </p>
      <p>
        We'll be responding to all applicants on
        {/* {dateResponse.toDate()}  */}
      </p>
      <BackToHomeLink />
    </Page>
  );
}

Congrats.propTypes = {
  cohortInfo: PropTypes.object.isRequired,
};
