import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Record extends Component {
  constructor(props) {
    super(props);
    this.state = { onEdit: false, content: props.content };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.contentChange = this.contentChange.bind(this);
    this.sendContent = this.sendContent.bind(this);
  }

  toggleEdit() {
    this.setState(prevState => ({
      onEdit: !prevState.onEdit,
    }));
  }

  contentChange(e) {
    this.setState({
      content: e.target.value,
    });
  }

  async sendContent() {
    await this.props.saveContent(this.state.content);
    this.toggleEdit();
  }

  render() {
    if (this.state.onEdit) {
      return (
        <div className="view-record">
          <h3 className="view-label">{this.props.label}</h3>
          <input
            className="view-input"
            type="text"
            value={this.state.content}
            onChange={this.contentChange}
          />
          <button className="view-button" onClick={this.toggleEdit}>
            Cancel
          </button>
          <button className="view-button" onClick={this.sendContent}>
            Save
          </button>
        </div>
      );
    } else {
      return (
        <div className="view-record">
          <h3 className="view-label">{this.props.label}</h3>
          <span className="view-content">{this.props.content}</span>
          <button className="view-button" onClick={this.toggleEdit}>
            Edit
          </button>
        </div>
      );
    }
  }
}

Record.propTypes = {
  label: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  saveContent: PropTypes.func.isRequired,
};

export default Record;
