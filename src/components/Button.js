import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  return (
    <button
      data-testid="btn"
      className="button-style"
      type={props.type || 'button'}
      onClick={props.handleClick}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};
