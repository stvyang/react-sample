import React from 'react';
import PropTypes from 'prop-types';

const Header = props => <h1 className="view-header">{props.name}</h1>;

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
