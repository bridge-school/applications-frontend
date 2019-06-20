import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  fetchSelectedCohort,
  studentSubmission,
} from '../store/actions/appActions';
import PageTitle from '../components/PageTitle';
import Loading from '../components/Loading';
import Input from '../components/Input';
import Congrats from '../components/Congrats';
import Radio from '../components/Radio';
import Button from '../components/Button';
import CheckBox from '../components/CheckBox';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Dropdown from '../components/Dropdown';

const Form = styled.form`
  margin: 2em 0;
  button {
    margin: 2em auto;
    display: block;
  }
`;

const CohortName = styled.p`
  font-size: 1.5em;
  letter-spacing: -0.5px;
  font-weight: bold;
  margin: 0.5em 0;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const EditLink = styled(Link)`
  && {
    border-color: ${p => p.theme.indigo};
    background: ${p => p.theme.indigo};
    &:hover {
      color: ${p => p.theme.indigo};
    }
  }
`;

function CohortForm({
  error,
  loading,
  getSelectedCohort,
  location,
  selectedCohort,
  successfulSubmission,
  sendStudentSubmission,
  auth,
}) {
  // state for valid form ID
  const [formIdFound, setFormIdFound] = useState(false);

  useEffect(() => {
    // check if location.state is not undefined (e.g. it's undefined if a random string is put after '/apply')
    if (location.state) {
      // getting the selected cohort's id via the router's state object - passed in from ListItem.js
      getSelectedCohort(location.state.id);
      setFormIdFound(true);
    }
  }, [getSelectedCohort, location.state]);

  const [formData, setFormData] = useState({});

  const updateInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    sendStudentSubmission(formData);
  };

  if (error) {
    return <div>{error.message} Please try again!</div>;
  }
  if (loading) return <Loading />;

  if (successfulSubmission) return <Congrats cohortInfo={selectedCohort} />;

  if (!formIdFound) {
    return <div>Application not found. Please try again.</div>;
  }
  return (
    selectedCohort && (
      <Form onSubmit={handleSubmit}>
        <Header>
          <div>
            <PageTitle title="Apply for Bridge" />
            <CohortName>{selectedCohort.cohortDisplayName}</CohortName>
          </div>
          {auth.uid && (
            <EditLink
              className="button-style"
              to={{
                pathname: `/admin/${selectedCohort.id}`,
                state: { formData: selectedCohort },
              }}
            >
              Edit this form
            </EditLink>
          )}
        </Header>

        {selectedCohort.formQuestions.map(question => {
          const inputProps = {
            type: question.type,
            label: question.description,
            name: question.id,
            required: question.isRequired,
            handleChange: updateInput,
            value: formData[question.id],
            key: question.id,
          };

          switch (question.type) {
            case 'input':
            case 'email':
              return <Input {...inputProps} />;
            case 'checkbox':
              return (
                <CheckBox
                  {...inputProps}
                  description={question.description}
                  items={question.options}
                />
              );
            case 'textarea':
              return <Input {...inputProps} rows={question.rows} />;
            case 'select':
              return (
                <Dropdown
                  {...inputProps}
                  description={question.description}
                  items={question.options}
                />
              );
            case 'radio':
              return (
                <Radio
                  {...inputProps}
                  description={question.description}
                  items={question.options}
                />
              );
            default:
              return null;
          }
        })}

        <Button text="apply for bridge" type="submit" />
      </Form>
    )
  );
}

const mapStateToProps = state => ({
  loading: state.app.loading,
  error: state.app.error,
  selectedCohort: state.app.selectedCohort,
  successfulSubmission: state.app.successfulSubmission,
  auth: state.firebase.auth,
});

const mapDispatchToProps = dispatch => {
  return {
    getSelectedCohort: applicationID =>
      dispatch(fetchSelectedCohort(applicationID)),
    sendStudentSubmission: formData => dispatch(studentSubmission(formData)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CohortForm);

CohortForm.propTypes = {
  auth: PropTypes.object,
  getSelectedCohort: PropTypes.func,
  error: PropTypes.object,
  loading: PropTypes.bool,
  sendStudentSubmission: PropTypes.func,
  selectedCohort: PropTypes.object,
  successfulSubmission: PropTypes.bool,
};
