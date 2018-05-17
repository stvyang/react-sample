import React from 'react';
import PropTypes from 'prop-types';

function saveForm(saveCallback, e) {
  e.preventDefault();
  saveCallback();
}

function cancelForm(cancelCallback, e) {
  e.preventDefault();
  cancelCallback();
}

const CreateForm = props => {
  this.saveForm = saveForm.bind(this, props.onSave);
  this.cancelForm = cancelForm.bind(this, props.onCancel);
  return (
    <div>
      <form className="create-form">
        {props.children}
        <div className="actions">
          <button onClick={this.saveForm}>Save</button>
          <button onClick={this.cancelForm}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

CreateForm.propTypes = {
  children: PropTypes.arrayOf(Object),
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

CreateForm.defaultProps = {
  children: <div />,
};

export default CreateForm;
