import React from 'react';
import PropTypes from 'prop-types';

const NotFound = (props => <div>Unfortunately, you did not have any {props.name} yet.</div>);

NotFound.propTypes = {
  name: PropTypes.string.isRequired,
};
export default NotFound;
