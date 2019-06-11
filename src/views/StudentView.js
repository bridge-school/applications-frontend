import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PageTitle from '../components/PageTitle';
import ListContainer from '../components/ListContainer';
import styled from 'styled-components';
import { fetchCurrentCohorts } from '../store/actions';

const Header = styled.header`
  margin: 0 0 3rem 0;
`;

function StudentView({ error, loading, getCurrentCohorts, currentCohorts }) {
  useEffect(() => {
    getCurrentCohorts();
  }, [getCurrentCohorts]);

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header>
        <PageTitle title="Cohort Application Forms" />
      </Header>
      <ListContainer cohortData={currentCohorts} />
    </div>
  );
}

const mapStateToProps = state => ({
  error: state.error,
  loading: state.loading,
  currentCohorts: state.currentCohorts,
});

const mapDispatchToProps = dispatch => {
  return {
    getCurrentCohorts: () => dispatch(fetchCurrentCohorts()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentView);

StudentView.propTypes = {
  error: PropTypes.object,
  currentCohorts: PropTypes.array,
  loading: PropTypes.bool,
  getCurrentCohorts: PropTypes.func,
};
