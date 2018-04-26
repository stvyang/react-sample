import React, { Component } from 'react';

import Navigation from './components/Navigation';
import Content from './components/Content';

export default class App extends Component {
  render() {
    return (
      <div id="main">
        <Navigation />
        <Content />
      </div>
    )
  }
}
