import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
    background-color: ${props => props.theme.grey};
    padding: ${props => props.theme.padding}
`

export default function ApplicationListItem({}) {
    return <ListItem>list item!</ListItem>
} 