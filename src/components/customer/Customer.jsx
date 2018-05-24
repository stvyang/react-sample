import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Dashboard from './Dashboard';
import Create from './order/Create';
import View from './order/View';

const Customer = props => {
  const { match } = props;
  return (
    <div id="customer">
      <Switch>
        <Route exact path={`${match.url}/`} component={Dashboard} />
        <Route path={`${match.url}/order/create`} component={Create} />
        <Route path={`${match.url}/order/:id`} component={View} />
      </Switch>
    </div>
  );
};

Customer.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Customer;
