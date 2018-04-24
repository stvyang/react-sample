import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

import Customer from './components/customer-access/Customer';
import Admin from './components/admin-access/Admin'

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route path='/customer' component={Customer} />
          <Route path='/admin' component={Admin} />
        </Switch>
      </div>
    )
  }
}

App.propTypes = {
  txt: PropTypes.String
}

export default App;
