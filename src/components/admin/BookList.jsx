import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getBooks } from '../../queries';
import Loading from '../global/Loading';
import NotFound from '../global/NotFound';

class BookList extends Component {
  displayBooks() {
    const { data } = this.props;
    if (data.loading) {
      return <Loading />;
    } else if (data.books.length > 0) {
      return (
        <div>
          <h3>Books</h3>
          <div id="book-list">{this.displayAllBook()}</div>
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

BookList.propTypes = {
  data: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default graphql(getBooks)(BookList);
