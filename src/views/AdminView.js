import React, { useEffect } from 'react';
import PageTitle from '../components/PageTitle';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import ListContainer from '../components/ListContainer';
import { fetchAllCohorts } from '../store/actions/appActions';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 1.5rem 0 3.5rem;
`;

const isAdmin = true;

function AdminView({ error, allCohorts, loading, getAllCohorts, auth }) {
  useEffect(() => {
    getAllCohorts();
  }, [getAllCohorts]);

  // If not loggedin redirect
  if (!auth.uid) return <Redirect to="/login" />;

  if (error) return <div>Error! {error.message}</div>;

  if (loading) return <Loading />;

  return (
    <div>
      <Header>
        <PageTitle title="All Cohort Application Forms" />
        <Link to="/admin/create" className="button-style">
          Create application group
        </Link>
      </Header>
      <ListContainer isAdmin={isAdmin} cohortData={allCohorts} />
    </div>
  );
}

const mapStateToProps = state => ({
  error: state.app.error,
  loading: state.app.loading,
  allCohorts: state.app.allCohorts,
  auth: state.firebase.auth,
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
  auth: PropTypes.object.isRequired,
  isAdmin: PropTypes.bool,
};
