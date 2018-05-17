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
    this.state = {
      book: {
        title: '',
        author: '',
        price: 0,
        stock: 0,
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleTitleChanged = this.handleChange.bind(this, 'title', 'text');
    this.handleAuthorChanged = this.handleChange.bind(this, 'author', 'text');
    this.handlePriceChanged = this.handleChange.bind(this, 'price', 'number');
    this.handleStockChanged = this.handleChange.bind(this, 'stock', 'number');
  }

  save = async () => {
    const { book } = this.state;
    await this.props.createBook({
      variables: {
        title: book.title,
        author: book.author,
        price: book.price,
        stock: book.stock,
      },
    });
    this.props.history.push('/admin');
  };

  cancel = () => {
    this.props.history.push('/admin');
  };

  handleChange(propName, inputType, e) {
    const { book } = this.state;
    switch (inputType) {
      case 'text':
        book[propName] = e.target.value;
        break;
      case 'number':
        book[propName] = Number(e.target.value);
        break;
      default:
        book[propName] = e.target.value;
    }
    this.setState({ book });
  }

  render() {
    const { book } = this.state;
    return (
      <div>
        <CreateForm onSave={this.save} onCancel={this.cancel}>
          <Header name="New Book" />
          <TextInput label="Title" value={book.title} onChange={this.handleTitleChanged} />
          <TextInput label="Author" value={book.author} onChange={this.handleAuthorChanged} />
          <NumberInput label="Price" value={book.price} onChange={this.handlePriceChanged} />
          <NumberInput label="Stock" value={book.stock} onChange={this.handleStockChanged} />
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
