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
    font-size: 140%;
  }
  a {
    margin-top: 4em;
    font-size: 130%;
  }
  .emoji {
    font-size: 400%;
    margin: 1em;
    display: block;
  }
`;

export default function Congrats(props) {
  return (
    <Page>
      <PageTitle title="Congratulations!" />
      <HorizontalRule />
      <span className="emoji" role="img" aria-label="Party popper emoji">
        🎉
      </span>
      {props.cohortInfo ? (
        <>
          <p>
            You have successfully submitted your application to{' '}
            <strong>{props.cohortInfo.cohortDisplayName}</strong>.
          </p>
          <p>Applications will be open until `Close Date`.</p>
          <p>
            All applicants will hear back from the Bridge team by `Date of
            Response`.
          </p>
        </>
      ) : (
        <p>{props.message}</p>
      )}

      <BackToHomeLink />
    </Page>
  );
}

Congrats.propTypes = {
  cohortInfo: PropTypes.object,
  message: PropTypes.object,
};
