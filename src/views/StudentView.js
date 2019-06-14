import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PageTitle from '../components/PageTitle';
import ListContainer from '../components/ListContainer';
import styled from 'styled-components';
import Loading from '../components/Loading';
import { fetchCurrentCohorts } from '../store/actions/appActions';

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
  if (loading) return <Loading />;

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
  error: state.app.error,
  loading: state.app.loading,
  currentCohorts: state.app.currentCohorts,
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
