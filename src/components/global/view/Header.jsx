import React from 'react';
import PropTypes from 'prop-types';

const Header = props => <h3 className="view-header">{props.name}</h3>;

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
