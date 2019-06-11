import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from './Input';
import Dropdown from './Dropdown';
import Checkbox from './CheckBox';

const QuestionOuterWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  width: 100%;
`;

const InputWrapper = styled.div`
  width: 70%;
  margin-right: 2rem;
`;

const DropdownWrapper = styled.div`
  width: 10em;
  margin-right: 0.9rem;
`;

const CheckboxWrapper = styled.div`
  width: 5em;
  margin-top: -2.2rem;
`;

const ButtonElem = styled.button`
  && {
    padding: 0.25em 0.5em 0.35em;
    margin: 1.5rem 0 0 1em;
    border-radius: 50%;
    border: 1px solid;
    font-weight: bold;
    line-height: 1;
    background: #e87a7a;
    color: white;
    &:hover {
      background: #d81919;
    }
  }
`;

export default function AddQuestion({
  handleChange,
  handleRemoveQuestion,
  data,
  index,
}) {
  const handleChangeAtIndex = handleChange(index);
  return (
    <QuestionOuterWrapper>
      <InputWrapper>
        <Input
          name={`description${index}`}
          type="text"
          required
          value={data.description}
          handleChange={handleChangeAtIndex('description')}
          label={`Question #${index + 1}`}
        />
      </InputWrapper>
      <DropdownWrapper>
        <Dropdown
          name={`type${index}`}
          value={data.type}
          required
          data={{
            description: `Question #${index + 1} Type`,
            items: [
              {
                label: 'Short Answer',
                value: 'input',
              },
              {
                label: 'Paragraph',
                value: 'textarea',
              },
              {
                label: 'Single Choice',
                value: 'radio',
              },
              {
                label: 'Checkboxes',
                value: 'checkbox',
              },
              {
                label: 'Dropdown',
                value: 'select',
              },
            ],
          }}
          handleChange={handleChangeAtIndex('type')}
        />
      </DropdownWrapper>
      <CheckboxWrapper>
        <Checkbox
          name={`isRequired${index}`}
          data={{
            description: 'Is required?',
            type: 'checkbox',
            items: [
              {
                label: 'Is Required',
                value: data.isRequired,
                handleChange: handleChangeAtIndex('isRequired'),
              },
            ],
          }}
        />
      </CheckboxWrapper>

      <ButtonElem
        title="Delete Question"
        onClick={e => handleRemoveQuestion(data.id, e)}
      >
        x
      </ButtonElem>

      {data.multiChoice && (
        <InputWrapper>
          <Input
            name={`description${index}`}
            type="text"
            required
            value={data.description}
            handleChange={handleChangeAtIndex('description')}
            label={`Question #${index + 1}`}
          />
        </InputWrapper>
      )}
    </QuestionOuterWrapper>
  );
}

AddQuestion.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number,
  handleChange: PropTypes.func,
  handleAddNewQuestion: PropTypes.func,
  handleRemoveQuestion: PropTypes.func,
};
