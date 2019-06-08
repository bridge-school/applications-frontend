import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PageTitle from '../components/PageTitle';
import Input from '../components/Input';
import Dropdown from '../components/Dropdown';
import Checkbox from '../components/Fieldset';
import Button from '../components/Button';
import bridgeTheme from '../styles/bridgeTheme';

const QuestionContainer = styled.div`
  display: block;
  width: 100%;
`;

const QuestionOuterWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: ${props => props.theme.padding} 0;
  width: 100%;
`;

const InputWrapper = styled.div`
  width: 70%;
  margin-right: 2rem;
`;

const DropdownWrapper = styled.div`
  width: 19%;
  margin-right: 2rem;
`;

const CheckboxWrapper = styled.div`
  width: 8%;
`;

const ButtonWrapper = styled.div`
  width: 3%;
`;

const ButtonElem = styled.button`
  width: 24px;
  height: 24px;
  display: block;
  border-radius: 50%;
  background: #f00;
  color: white;
`;

export default function AddQuestions({fields, handleChange, handleAddNewQuestion, handleRemoveQuestion}) {
  return (
    <div>
      <PageTitle title="Application Questions" />
      <QuestionContainer>
        {fields.map((field, index) => {
          const handleChangeAtIndex = handleChange(index);

          return(
            <QuestionOuterWrapper key={`${field}-${index}`}>
              <InputWrapper>
                <Input
                  name={`description${index}`} 
                  type="text" 
                  value={field.description}
                  handleChange={handleChangeAtIndex('description')}
                  label={`Question #${index+1}`} 
                />
              </InputWrapper>
              <DropdownWrapper>
                <Dropdown 
                  name={`type${index}`}
                  value={field.type}
                  data={{
                    description: `Question #${index+1} Type`, 
                    placeholder: "Select question type",
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
                    ] 
                  }} 
                  handleChange={handleChangeAtIndex('type')}
                />
              </DropdownWrapper>
              <CheckboxWrapper>
                <Checkbox
                  name={`ifRequired${index}`}
                  data={{
                    description: 'Is required?', 
                    type: 'checkbox', 
                    items: [
                    {
                      label: 'Is required?',
                      value: field.ifRequired,
                      handleChange: handleChangeAtIndex('ifRequired')
                    }]
                  }}
                />
              </CheckboxWrapper>
              <ButtonWrapper>
                <ButtonElem
                  onClick={handleRemoveQuestion(index)}
                >-</ButtonElem>
              </ButtonWrapper>
            </QuestionOuterWrapper>
          );
        })}
      </QuestionContainer>
      <Button
        text="Add new Question"
        uppercase
        backgroundColor={bridgeTheme.green}
        handleClick={handleAddNewQuestion}
      />
    </div>
  );
}

AddQuestions.propTypes = {
  fields: PropTypes.array,
  handleChange: PropTypes.func,
  handleAddNewQuestion: PropTypes.func,
  handleRemoveQuestion: PropTypes.func
};