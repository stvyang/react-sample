import React from 'react';
import PropTypes from 'prop-types';

const NotFound = props => <div>{props.name}</div>;

NotFound.propTypes = {
  name: PropTypes.string,
};

NotFound.defaultProps = {
  name: 'No Data',
};

export default NotFound;
