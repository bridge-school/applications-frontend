import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';
import Input from '../components/Input';
import Radio from '../components/Radio';
import styled from 'styled-components';
import Button from '../components/Button';

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

const egData = {
  cohortName: 'cohort 8',
  cohortType: 'frontend-development',
  dateOpen: '2019-06-11',
  dateClosed: '2019-06-29',
  dateResponse: '2019-06-15',
  formQuestions: [
    {
      description: 'Full Name',
      type: 'text',
      isRequired: true,
      id: '010c8de6-b13d-493b-adb8-',
    },
    {
      description: 'Email',
      type: 'email',
      isRequired: true,
      id: '010c8de6-b13d-adb8-560d55d055a1',
    },
    {
      description: 'How do you identify?',
      type: 'checkbox',
      isRequired: false,
      id: 'a1e30a65-422f-40aa-b4d9-4914aa246403',
    },
    {
      description: 'Radio - How do you identify?',
      type: 'radio',
      isRequired: false,
      id: 'a1e30a65-422f-40aa-b4d9',
    },
    {
      description: 'Why do you want to attend Bridge?',
      type: 'textarea',
      isRequired: true,
      id: '010c8de6-b13d-493b-adb8-560d55d055a1',
    },
  ],
  cohortSlug: 'cohort-8-frontend',
};

export default function CohortForm() {
  const displayCohortName = () => {
    const splitName = egData.cohortType.split('-');
    const capitalized = [];
    splitName.forEach(word =>
      capitalized.push(word.charAt(0).toUpperCase() + word.slice(1))
    );
    return `${capitalized.join(' ')} – ${egData.cohortName}`;
  };

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
    return egData.formQuestions.map(question => {
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
        case 'text':
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

  return (
    <Form onSubmit={handleSubmit}>
      <PageTitle title="Apply for Bridge" />
      <CohortName>{displayCohortName()}</CohortName>

      {displayForm()}

      <Button text="apply for bridge" />
    </Form>
  );
}
