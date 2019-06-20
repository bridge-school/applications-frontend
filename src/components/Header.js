import React from 'react';
import styled from 'styled-components';
import logo from '../images/bridge-logo.svg';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../store/actions/authActions';

const TopBar = styled.header`
  background: ${props => props.theme.indigo};
  color: white;
  font-weight: bold;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: ${props => props.theme.padding};
  max-width: 64rem;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  @media (max-width: 500px) {
    flex-wrap: wrap;
    text-align: center;
    img,
    h1 {
      width: 100%;
    }
    div {
      margin: 0.5em auto 0;
      a {
        margin: 0.5em;
      }
    }
  }
`;

const Logo = styled.img`
  height: 2rem;
  margin: 0.6rem 3rem 0.25rem 0;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  margin: 0;
`;

const AdminLinks = styled.div`
  margin-left: auto;
  font-size: 0.8rem;
`;

function Header({ auth, logOut }) {
  // Handle Logout
  const handleLogout = e => {
    e.preventDefault();
    logOut();
  };

  return (
    <TopBar>
      <Wrapper>
        <Link to="/" title="Bridge home">
          <Logo src={logo} alt="Bridge Logo" />
        </Link>
        <Title>Cohort Application</Title>
        {auth.uid ? (
          <AdminLinks>
            <Link className="nav-link-style" to="/admin">
              Admin View
            </Link>
            <Link className="nav-link-style" to="/" onClick={handleLogout}>
              Logout
            </Link>
          </AdminLinks>
        ) : (
          <AdminLinks>
            <Link className="nav-link-style" to="/login">
              Login
            </Link>
          </AdminLinks>
        )}
      </Wrapper>
    </TopBar>
  );
}

const mapDispatchToProps = {
  logOut,
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

Header.propTypes = {
  auth: PropTypes.object,
  logOut: PropTypes.func.isRequired,
};
