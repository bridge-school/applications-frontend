import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import Button from '../components/Button';
import Input from '../components/Input';
import { connect } from 'react-redux';
import { logIn } from '../store/actions/authActions';

const LoginWrapper = styled.div`
  width: 24em;
  margin: 0 auto;
`;
const Form = styled.form`
  margin-top: 2rem;
  label {
    display: block;
    margin-top: 1rem;
  }
  button {
    margin: 2em auto;
    display: block;
  }
`;
const Error = styled.p`
  color: red;
`;

function Login({ loading, logIn, auth, authError }) {
  const [form, setValues] = useState({
    username: '',
    password: '',
  });

  // Handle Form Submission
  const handleFormSubmit = e => {
    e.preventDefault();
    logIn(form);
  };

  // Update input fields
  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // if already logged in go to admin view page
  if (auth.uid) return <Redirect to="/admin" />;

  if (loading) {
    return <div>Logging In...</div>;
  }
  return (
    <LoginWrapper>
      <PageTitle title="Admin Login" />
      <Form onSubmit={handleFormSubmit}>
        <Input
          name="username"
          type="email"
          autofocus
          value={form.username}
          label="Email"
          handleChange={updateField}
          required
        />
        <Input
          name="password"
          type="password"
          value={form.password}
          label="Password"
          handleChange={updateField}
          required
        />
        {authError ? <Error>{authError}</Error> : null}
        <Button text="Login" handleClick={handleFormSubmit} />
      </Form>
    </LoginWrapper>
  );
}

const mapStateToProps = state => ({
  loading: state.app.loading,
  authError: state.auth.authError,
  auth: state.firebase.auth,
});

const mapDispatchToProps = {
  logIn,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

Login.propTypes = {
  loading: PropTypes.bool,
  logIn: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  authError: PropTypes.string,
};
