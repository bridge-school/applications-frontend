import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PageTitle from '../components/PageTitle';
import Input from '../components/Input';
import Dropdown from '../components/Dropdown';
import Button from '../components/Button';
import bridgeTheme from '../styles/bridgeTheme';

const QuestionContainer = styled.div`
  display: block;
  width: 100%;
`;

const QuestionWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: ${props => props.theme.padding} 0;
  width: 100%;
`;

const QuestionDiv = styled.div`
  width: 70%;
  margin-right: 2rem;
`;

const DropdownDiv = styled.div`
  width: 19%;
  margin-right: 2rem;
`;

const CheckboxDiv = styled.div`
  width: 8%;
`;

const ButtonDiv = styled.div`
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
      <PageTitle title="Create Cohort Application Form" />
      <QuestionContainer>
        {fields.map((field, index) => {
          const handleChangeAtIndex = handleChange(index)
          return(
            <QuestionWrap key={`${field}-${index}`}>
              <QuestionDiv>
                <Input
                  name={`description${index}`} 
                  type="text" 
                  value={field.description}
                  handleChange={handleChangeAtIndex('description')}
                  label="Question" 
                />
              </QuestionDiv>
              <DropdownDiv>
                <Dropdown 
                  name={`type${index}`}
                  value={field.type}
                  data={{description: 'test'}} 
                  handleChange={handleChangeAtIndex('type')}
                />
              </DropdownDiv>
              <CheckboxDiv>
                <label>Is required? 
                  <input type="checkbox" name="tempcheckbox" /> {/* Temporary Checkbox: will be replaced by the checkbox component */}
                </label>
              </CheckboxDiv>
              <ButtonDiv>
                <ButtonElem
                  onClick={handleRemoveQuestion(index)}
                >-</ButtonElem>
              </ButtonDiv>
            </QuestionWrap>
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