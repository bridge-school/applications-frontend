import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  return (
    <button
      data-testid="btn"
      className="button-style"
      onClick={props.handleClick}
    >
      {props.text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};
