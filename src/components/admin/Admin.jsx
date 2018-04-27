import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookList from './BookList';
import View from './book/View';

const Admin = props => {
  const { match } = props;

  return (
    <div id="admin">
      <Switch>
        <Route exact path={`${match.url}/`} component={BookList} />
        <Route path={`${match.url}/book/:id`} component={View} />
      </Switch>
    </div>
  );
};

Admin.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Admin;
