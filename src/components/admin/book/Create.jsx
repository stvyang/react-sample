import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import { createBook } from '../../../queries';
import Header from '../../global/view/Header';
import TextInput from '../../global/create/TextInput';
import NumberInput from '../../global/create/NumberInput';
import CreateForm from '../../global/create/CreateForm';

class Create extends Component {
  constructor(props) {
    super(props);
    this.data = {
      title: '',
      author: '',
      price: 0,
      stock: 0,
    };
    this.save = this.save.bind(this);
    this.cancel = this.cancel.bind(this);
    this.handleTitleChanged = this.handleTitleChanged.bind(this);
    this.handleAuthorChanged = this.handleAuthorChanged.bind(this);
    this.handlePriceChanged = this.handlePriceChanged.bind(this);
    this.handleStockChanged = this.handleStockChanged.bind(this);
  }

  async save() {
    await this.props.createBook({
      variables: {
        title: this.data.title,
        author: this.data.author,
        price: this.data.price,
        stock: this.data.stock,
      },
    });
    this.props.history.push('/admin');
  }

  cancel() {
    this.props.history.push('/admin');
  }

  handleTitleChanged(newTitle) {
    this.data.title = newTitle;
  }

  handleAuthorChanged(newAuthor) {
    this.data.author = newAuthor;
  }

  handlePriceChanged(newPrice) {
    this.data.price = newPrice;
  }

  handleStockChanged(newStock) {
    this.data.stock = newStock;
  }

  render() {
    return (
      <div>
        <CreateForm onSave={this.save} onCancel={this.cancel}>
          <Header name="New Book" />
          <TextInput label="Title" onChange={this.handleTitleChanged} />
          <TextInput label="Author" onChange={this.handleAuthorChanged} />
          <NumberInput label="Price" onChange={this.handlePriceChanged} />
          <NumberInput label="Stock" onChange={this.handleStockChanged} />
        </CreateForm>
      </div>
    );
  }
}

Create.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  createBook: PropTypes.func.isRequired,
};

export default graphql(createBook, { name: 'createBook' })(Create);
