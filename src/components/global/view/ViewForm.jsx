import React from 'react';
import PropTypes from 'prop-types';

function deleteCallback(onDelete) {
  onDelete();
}

function confirmDelete(dataName, deleteForm, e) {
  e.preventDefault();
  const answer = window.confirm(`Are you sure you want to delete this ${dataName}?`);
  if (answer) {
    deleteForm(e);
  }
  return answer;
}

const ViewForm = props => {
  this.deleteCallback = deleteCallback.bind(this, props.onDelete);
  this.confirmDelete = confirmDelete.bind(this, props.dataName, this.deleteCallback);
  return (
    <div>
      <form className="view-form">
        <h3 className="view-header">{props.title}</h3>
        {props.children}
        <div className="actions">
          <button className="btn-danger" onClick={this.confirmDelete}>
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

ViewForm.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.instanceOf(Object),
  dataName: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};

ViewForm.defaultProps = {
  children: <div />,
  dataName: 'data',
};

export default ViewForm;
