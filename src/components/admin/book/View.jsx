import React from 'react';
import { compose, graphql } from 'react-apollo';
import _ from 'lodash';
import { getBookById, updateBookById } from '../../../queries';
import Loading from '../../global/Loading';
import NotFound from '../../global/NotFound';
import Header from '../../global/view/Header';
import Record from '../../global/view/Record';

let updateBookMutation = () => {};
let bookId = '';

function saveAuthor(authorName) {
  updateBookMutation({
    variables: {
      id: bookId,
      author: authorName,
    },
  });
}

const View = props => {
  updateBookMutation = props.updateBookById;
  bookId = props.match.params.id;
  if (props.data.loading) {
    return <Loading />;
  } else if (!_.isEmpty(props.data.book)) {
    return (
      <div className="view">
        <Header name={props.data.book.title} />
        <Record label="Author" content={props.data.book.author} saveContent={saveAuthor} />
        <Record label="Price" content={props.data.book.price} />
        <Record label="Stock" content={props.data.book.stock} />
      </div>
    );
  } else {
    return <NotFound name={this.notFound} />;
  }
};

export default compose(
  graphql(getBookById, {
    options: props => ({
      variables: { id: props.match.params.id },
    }),
  }),
  graphql(updateBookById, { name: 'updateBookById' }),
)(View);
