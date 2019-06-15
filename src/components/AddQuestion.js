import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from './Input';
import Dropdown from './Dropdown';
import Checkbox from './CheckBox';

const QuestionOuterWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-bottom: ${props => props.theme.padding};
  width: 100%;
`;

const QuestionInnerWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
`;

const InputWrapper = styled.div`
  width: 66%;
  margin: -1.5em 2rem 0 0;
`;

const DropdownWrapper = styled.div`
  width: 10em;
  margin-right: 0.9rem;
`;

const CheckboxWrapper = styled.div`
  width: 5em;
  margin-top: -2.2rem;
`;

const DeleteButton = styled.button`
  && {
    padding: 0.25em 0.5em 0.35em;
    margin: 1.75rem 0 0 1em;
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
  handleInputChange,
  handleRemoveQuestion,
  data,
  index,
}) {
  return (
    <QuestionOuterWrapper>
      <QuestionInnerWrapper>
        <InputWrapper>
          <Input
            name={`description${index}`}
            type="text"
            required
            value={data.description}
            handleChange={handleInputChange(index)('description')}
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
                  label: 'short answer',
                  value: 'input',
                },
                {
                  label: 'paragraph',
                  value: 'textarea',
                },
                {
                  label: 'checkboxes',
                  value: 'checkbox',
                },
                {
                  label: 'drop down',
                  value: 'select',
                },
              ],
            }}
            handleChange={handleInputChange(index)('type')}
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
                  handleChange: handleInputChange(index)('isRequired'),
                },
              ],
            }}
          />
        </CheckboxWrapper>
        <DeleteButton
          title="Delete Question"
          onClick={e => handleRemoveQuestion(data.id, e)}
        >
          x
        </DeleteButton>
      </QuestionInnerWrapper>
      {(data.type === 'checkbox' || data.type === 'select') && (
        <QuestionInnerWrapper>
          <InputWrapper>
            <Input
              name={`multiValues${index}`}
              type="text"
              required
              value={data.multiValues}
              handleChange={handleInputChange(index)('multiValues')}
              label={`Answer Values for Question #${index +
                1} (as comma-separated values)`}
            />
          </InputWrapper>
        </QuestionInnerWrapper>
      )}
    </QuestionOuterWrapper>
  );
}

AddQuestion.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number,
  handleInputChange: PropTypes.func,
  handleRemoveQuestion: PropTypes.func,
};
