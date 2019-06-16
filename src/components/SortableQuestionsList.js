import React from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DraggableListItem = styled.li`
  cursor: move;
  margin: 6px;
  padding: 0.75em 1em;
  background: ${p => p.theme.grey};
  border-radius: ${p => p.theme.borderRadius};
  span {
    margin: 0 1em;
    &:first-of-type {
      font-weight: bold;
    }
    &:last-of-type {
      font-style: italic;
    }
  }
`;

const ListContainer = styled.ol`
  padding: 0em 2em 1em;
  list-style: decimal inside;
`;

const SortableItem = SortableElement(({ question }) => (
  <DraggableListItem>
    <span>{question.description.trim() || '[missing description]'}</span> —
    <span> {question.type || '[missing type]'}</span>
  </DraggableListItem>
));

const SortableList = SortableContainer(({ items }) => {
  return (
    <ListContainer>
      {items.map((question, index) => (
        <SortableItem key={index} index={index} question={question} />
      ))}
    </ListContainer>
  );
});

export default function SortableQuestionsList({ items, onSortEnd }) {
  return <SortableList items={items} onSortEnd={onSortEnd} />;
}

SortableQuestionsList.propTypes = {
  items: PropTypes.array.isRequired,
  onSortEnd: PropTypes.func.isRequired,
};
