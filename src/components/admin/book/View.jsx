import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { getBookById, updateBookById } from '../../../queries';
import Loading from '../../global/Loading';
import NotFound from '../../global/NotFound';
import Header from '../../global/view/Header';
import Record from '../../global/view/Record';

class View extends Component {
  constructor(props) {
    super(props);
    this.saveTitle = this.saveTitle.bind(this);
    this.saveAuthor = this.saveAuthor.bind(this);
    this.savePrice = this.savePrice.bind(this);
    this.saveStock = this.saveStock.bind(this);
  }

  async saveTitle(newTitle) {
    await this.props.updateBookById({
      variables: {
        id: this.props.match.params.id,
        title: newTitle,
      },
    });
    await this.props.data.refetch();
  }

  async saveAuthor(newAuthor) {
    await this.props.updateBookById({
      variables: {
        id: this.props.match.params.id,
        author: newAuthor,
      },
    });
    await this.props.data.refetch();
  }

  async savePrice(newPrice) {
    await this.props.updateBookById({
      variables: {
        id: this.props.match.params.id,
        price: newPrice,
      },
    });
    await this.props.data.refetch();
  }

  async saveStock(newStock) {
    await this.props.updateBookById({
      variables: {
        id: this.props.match.params.id,
        stock: newStock,
      },
    });
    await this.props.data.refetch();
  }

  displayBook() {
    if (this.props.data.loading) {
      return <Loading />;
    } else if (!_.isEmpty(this.props.data.book)) {
      return (
        <div className="view">
          <Header name="Book Detail" />
          <Record label="Title" content={this.props.data.book.title} saveContent={this.saveTitle} />
          <Record
            label="Author"
            content={this.props.data.book.author}
            saveContent={this.saveAuthor}
          />
          <Record label="Price" content={this.props.data.book.price} saveContent={this.savePrice} />
          <Record label="Stock" content={this.props.data.book.stock} saveContent={this.saveStock} />
        </div>
      );
    } else {
      return <NotFound name={this.notFound} />;
    }
  }

  render() {
    return this.displayBook();
  }
}

View.propTypes = {
  data: PropTypes.shape({
    book: PropTypes.shape({
      title: PropTypes.string,
      author: PropTypes.string,
      price: PropTypes.number,
      stock: PropTypes.number,
    }),
    loading: PropTypes.bool.isRequired,
    refetch: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  updateBookById: PropTypes.func.isRequired,
};

export default compose(
  graphql(getBookById, {
    options: props => ({
      variables: { id: props.match.params.id },
    }),
  }),
  graphql(updateBookById, { name: 'updateBookById' }),
)(View);
