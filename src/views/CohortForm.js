import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fetchSelectedCohort } from '../store/actions';
import PageTitle from '../components/PageTitle';
import Input from '../components/Input';
import Radio from '../components/Radio';
import Button from '../components/Button';
import { connect } from 'react-redux';

const Form = styled.form`
  margin: 2em 0;
  button {
    margin: 2em auto;
    display: block;
  }
  & div {
    margin: 1em 0;
  }
`;

const CohortName = styled.p`
  font-size: 1.5em;
  letter-spacing: -0.5px;
  font-weight: bold;
  margin: 0.5em 0;
`;

function CohortForm({
  error,
  loading,
  getSelectedCohort,
  location,
  selectedCohort,
}) {
  const [formIdFound, setFormIdFound] = useState(false);
  useEffect(() => {
    // check if location.state is not undefined
    if (location.state) {
      // getting the selected cohort's id via the router's state object - passed in from ListItem.js
      getSelectedCohort(location.state.id);
      setFormIdFound(true);
    } else {
      setFormIdFound(false);
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
    console.log('SEND', formData);
  };

  const displayForm = () => {
    return selectedCohort.formQuestions.map(question => {
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
        case 'checkbox':
          return <Input {...inputProps} />;
        case 'textarea':
          return <Input {...inputProps} rows={question.rows} />;
        case 'radio':
          return (
            <Radio
              description={question.description}
              name={question.id}
              key={question.id}
              // TO DO
              items={['one', 'two', 'three']}
            />
          );
        default:
          return null;
      }
    });
  };

  if (error) {
    return <div>{error.message} Please try again!</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  // if (newSubmission) {
  //   return <div>Successfully created {newCohort}!</div>;
  // }

  if (!formIdFound) {
    return <div>Application not found. Please try again.</div>;
  }
  return (
    selectedCohort && (
      <Form onSubmit={handleSubmit}>
        <PageTitle title="Apply for Bridge" />
        <CohortName>{selectedCohort.cohortDisplayName}</CohortName>

        {displayForm()}

        <Button text="apply for bridge" />
      </Form>
    )
  );
}

const mapStateToProps = state => ({
  loading: state.loading,
  error: state.error,
  selectedCohort: state.selectedCohort,
});

const mapDispatchToProps = dispatch => {
  return {
    getSelectedCohort: applicationID =>
      dispatch(fetchSelectedCohort(applicationID)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CohortForm);

CohortForm.propTypes = {
  getSelectedCohort: PropTypes.func.isRequired,
  error: PropTypes.object,
  loading: PropTypes.bool,
};
