import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Customer from './customer/Customer';
import Admin from './admin/Admin';

export default class Content extends Component {
  render() {
    return (
      <div id="content">
        <Switch>
          <Route path='/customer' component={Customer} />
          <Route path='/admin' component={Admin} />
        </Switch>
      </div>
    )
  }
}
