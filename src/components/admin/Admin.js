import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooks } from '../../queries';
import Loading from '../global/Loading';

class Admin extends Component {
  displayBooks() {
    let data = this.props.data;
    if (data.loading) {
      return <Loading />;
    }
    else {
      if (data.books.length > 0) {
        return data.books.map(book => (
            <li key={book.id}>{book.author}</li>
          )
        )
      } else {
        return (
          <div>Unfortunately, you didn't have any book yet.</div>
        )
      }
    }
  }

  render() {
    return (
      <div>
        <h3>Your books...</h3>
        <div id="book-list">
          {this.displayBooks()}
        </div>
      </div>
    )
  }
}

export default graphql(getBooks)(Admin);
