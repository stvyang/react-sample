import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import Customer from './customer/Customer';
import Admin from './admin/Admin';

const client = new ApolloClient({
  uri: 'https://stvyang-graphql-sample.herokuapp.com/graphql',
});
const Content = () => (
  <ApolloProvider client={client}>
    <div id="content">
      <Switch>
        <Route path="/customer" component={Customer} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </div>
  </ApolloProvider>
);

export default Content;
