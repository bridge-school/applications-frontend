import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.theme.grey};
    padding: ${props => props.theme.padding};
    margin: .2rem 0;
    font-weight: bold;
`

export default function ApplicationListItem({data}) {
    return <ListItem>[cohort_name]<div>[button component with cohort_type and color]</div></ListItem>
} 

ApplicationListItem.propTypes = {
    data: PropTypes.object,
  };