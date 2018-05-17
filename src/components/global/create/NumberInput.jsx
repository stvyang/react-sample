import React from 'react';
import PropTypes from 'prop-types';

function NumberInput(props) {
  return (
    <div>
      <h3 className="create-label">{props.label}</h3>
      <input className="create-input" type="number" value={props.value} onChange={props.onChange} />
    </div>
  );
}

NumberInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NumberInput;
