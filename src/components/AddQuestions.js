import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PageTitle from '../components/PageTitle';
import Input from '../components/Input';
import Dropdown from '../components/Dropdown';
import Checkbox from '../components/CheckBox';
import Button from '../components/Button';
import bridgeTheme from '../styles/bridgeTheme';

const QuestionContainer = styled.div`
  display: block;
  width: 100%;
`;

const QuestionOuterWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: ${props => props.theme.padding} 0;
  width: 100%;
`;

const QuestionWrap = styled.div`
  width: 70%;
  margin-right: 2rem;
`;

const DropdownWrap = styled.div`
  width: 19%;
  margin-right: 2rem;
`;

const CheckboxWrap = styled.div`
  width: 8%;
`;

const ButtonWrap = styled.div`
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

export default function AddQuestions({
  fields,
  handleChange,
  handleAddNewQuestion,
  handleRemoveQuestion,
}) {
  return (
    <div>
      <PageTitle title="Application Questions" />
      <QuestionContainer>
        {fields.map((field, index) => {
          const handleChangeAtIndex = handleChange(index);

          return (
            <QuestionOuterWrap key={`${field}-${index}`}>
              <QuestionWrap>
                <Input
                  name={`description${index}`}
                  type="text"
                  value={field.description}
                  handleChange={handleChangeAtIndex('description')}
                  label="Question"
                />
              </QuestionWrap>
              <DropdownWrap>
                <Dropdown
                  name={`type${index}`}
                  value={field.type}
                  data={{ description: 'test' }}
                  handleChange={handleChangeAtIndex('type')}
                />
              </DropdownWrap>
              <CheckboxWrap>
                <Checkbox
                  name={`ifRequired${index}`}
                  data={{
                    description: 'Is required?',
                    type: 'checkbox',
                    items: [
                      {
                        label: 'Is required?',
                        value: field.ifRequired,
                        handleChange: handleChangeAtIndex('ifRequired'),
                      },
                    ],
                  }}
                />
              </CheckboxWrap>
              <ButtonWrap>
                <ButtonElem onClick={handleRemoveQuestion(index)}>-</ButtonElem>
              </ButtonWrap>
            </QuestionOuterWrap>
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
  handleRemoveQuestion: PropTypes.func,
};
