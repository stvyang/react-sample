import React from 'react';
import PropTypes from 'prop-types';

function TextInput(props) {
  return (
    <div>
      <h3 className="create-label">{props.label}</h3>
      <input className="create-input" type="text" value={props.value} onChange={props.onChange} />
    </div>
  );
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;
