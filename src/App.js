import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './components/Navigation'

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
      </div>
    )
  }
}

App.propTypes = {
  txt: PropTypes.String
}

export default App;
