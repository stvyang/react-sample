import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './components/Navigation';
import Content from './components/Content';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Content />
      </div>
    )
  }
}

App.propTypes = {
  txt: PropTypes.String
}

export default App;
