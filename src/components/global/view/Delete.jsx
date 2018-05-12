import React from 'react';
import PropTypes from 'prop-types';

const Delete = props => {
  function confirmDelete() {
    const answer = window.confirm(`Are you sure you want to delete this ${props.dataType}?`);
    if (answer) {
      props.deleteData();
    }
    return answer;
  }
  return (
    <div className="view-delete">
      <button className="button-danger" onClick={confirmDelete}>
        Delete
      </button>
    </div>
  );
};

Delete.propTypes = {
  dataType: PropTypes.string.isRequired,
  deleteData: PropTypes.func.isRequired,
};

export default Delete;
