import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateForm extends Component {
  constructor(props) {
    super(props);
    this.saveForm = this.saveForm.bind(this);
    this.cancelForm = this.cancelForm.bind(this);
  }

  saveForm(e) {
    e.preventDefault();
    this.props.onSave();
  }

  cancelForm(e) {
    e.preventDefault();
    this.props.onCancel();
  }

  render() {
    return (
      <div>
        <form className="create-form">
          {this.props.children}
          <div className="actions">
            <button onClick={this.saveForm}>Save</button>
            <button onClick={this.cancelForm}>Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

CreateForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(Object),
};

CreateForm.defaultProps = {
  children: <div />,
};

export default CreateForm;
