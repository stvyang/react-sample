import React from 'react';
import PropTypes from 'prop-types';

const NotFound = props => <div>{props.name}</div>;

NotFound.propTypes = {
  name: PropTypes.string.isRequired,
};

export default NotFound;
