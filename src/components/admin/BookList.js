import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { getBooks } from '../../queries';
import Loading from '../global/Loading';
import NotFound from '../global/NotFound';

const dataName = "book";

class BookList extends Component {
  displayBooks() {
    let data = this.props.data;
    if (data.loading)
      return <Loading />;
    else {
      if (data.books.length > 0)
        return this.displayAllBook(data.books);
      else
        return <NotFound name={dataName}/>;
    }
  }

  displayAllBook(books){
    let allBooks = books.map(book => <li key={book.id}>{book.author}</li>);
    return (
      <ul>
        {allBooks}
      </ul>
    )
  }
  
  render() {
    return (
      <ul>
        {this.displayBooks()}   
      </ul>
    )
  }
}

export default graphql(getBooks)(BookList);