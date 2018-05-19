import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getBooks } from '../../../queries';
import Loading from '../../global/Loading';
import NotFound from '../../global/NotFound';

class List extends Component {
  displayBooks() {
    const { data, match } = this.props;
    if (data.loading) {
      return <Loading />;
    } else if (data.books.length > 0) {
      return (
        <div>
          <h3>Book List</h3>
          <button className="button-primary">
            <Link className="a-primary" to={`${match.url}/create`}>
              Create New
            </Link>
          </button>
          <div className="card-list">{this.displayAllBook()}</div>
        </div>
      );
    } else {
      return <NotFound name="Unfortunately, you did not have any book yet." />;
    }
  }

  displayAllBook() {
    const { data, match } = this.props;
    const allBooks = data.books.map(book => {
      return (
        <div className="card" key={book.id}>
          <div className="title">
            <Link to={`${match.url}/book/${book.id}`}>{book.title}</Link>
          </div>
          <div>By {book.author}</div>
        </div>
      );
    });
    return allBooks;
  }

  render() {
    return this.displayBooks();
  }
}

List.propTypes = {
  data: PropTypes.shape({
    books: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })),
  }).isRequired,
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default graphql(getBooks, {
  options: {
    fetchPolicy: 'network-only',
  },
})(List);
