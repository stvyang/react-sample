import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';

import { getBooks } from '../../queries';
import Loading from '../global/Loading';
import NotFound from '../global/NotFound';

const dataName = 'book';

class BookList extends Component {
  displayBooks() {
    const { data } = this.props;
    if (data.loading) {
      return <Loading />;
    } else if (data.books.length > 0) {
      return this.displayAllBook();
    } else {
      return <NotFound name={dataName} />;
    }
  }

  displayAllBook() {
    const { data } = this.props;
    const allBooks = data.books.map(book => <li key={book.id}>{book.author}</li>);
    return (
      <ul>
        {allBooks}
      </ul>
    );
  }

  render() {
    return (
      <div id="book-list">
        {this.displayBooks()}
      </div>
    );
  }
}

BookList.propTypes = {
  data: PropTypes.object.isRequired,
};

export default graphql(getBooks)(BookList);
