import React, { useEffect } from 'react';
import PageTitle from '../components/PageTitle';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ListContainer from '../components/ListContainer';
import { fetchAllCohorts } from '../store/actions';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 1.5rem 0 3.5rem;
`;

function AdminView({ error, allCohorts, loading, getAllCohorts }) {
  useEffect(() => {
    getAllCohorts();
  }, [getAllCohorts]);

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
        <Link to="/admin/create" className="button-style">
          Create application group
        </Link>
      </Header>
      <ListContainer cohortData={allCohorts} />
    </div>
  );
}

const mapStateToProps = state => ({
  error: state.error,
  loading: state.loading,
  allCohorts: state.allCohorts,
});

const mapDispatchToProps = dispatch => {
  return {
    getAllCohorts: () => dispatch(fetchAllCohorts()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminView);

AdminView.propTypes = {
  error: PropTypes.object,
  allCohorts: PropTypes.array,
  loading: PropTypes.bool,
  getAllCohorts: PropTypes.func,
};
