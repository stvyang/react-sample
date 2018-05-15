import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { content: '' };
    this.contentChange = this.contentChange.bind(this);
  }

  async contentChange(e) {
    await this.setState({
      content: e.target.value,
    });
    this.props.onChange(this.state.content);
  }

  render() {
    return (
      <div>
        <h3 className="create-label">{this.props.label}</h3>
        <input
          className="create-input"
          type="text"
          value={this.state.content}
          onChange={this.contentChange}
        />
      </div>
    );
  }
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;
