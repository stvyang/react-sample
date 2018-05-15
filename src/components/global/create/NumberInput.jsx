import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NumberInput extends Component {
  constructor(props) {
    super(props);
    this.state = { content: 0 };
    this.contentChange = this.contentChange.bind(this);
  }

  async contentChange(e) {
    const content = Number(e.target.value);
    await this.setState({
      content,
    });
    this.props.onChange(this.state.content);
  }

  render() {
    return (
      <div>
        <h3 className="create-label">{this.props.label}</h3>
        <input
          className="create-input"
          type="number"
          value={this.state.content}
          onChange={this.contentChange}
        />
      </div>
    );
  }
}

NumberInput.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NumberInput;
