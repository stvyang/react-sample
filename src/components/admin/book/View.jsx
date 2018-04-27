import React from 'react';
import { compose, graphql } from 'react-apollo';
import _ from 'lodash';
import { getBookById } from '../../../queries';
import Loading from '../../global/Loading';
import NotFound from '../../global/NotFound';

const View = props => {
  if (props.data.loading) {
    return <Loading />;
  } else if (!_.isEmpty(props.data.book)) {
    return (
      <div className="view">
        <h1 className="view-header">{props.data.book.title}</h1>
        <div>
          <h3 className="view-label">Author</h3>
          <span className="view-content">{props.data.book.author}</span>
        </div>
        <div>
          <h3 className="view-label">Price</h3>
          <span className="view-content">{props.data.book.price}</span>
        </div>
        <div>
          <h3 className="view-label">Stock</h3>
          <span className="view-content">{props.data.book.stock}</span>
        </div>
      </div>
    );
  } else {
    return <NotFound name={this.notFound} />;
  }
};

export default compose(graphql(getBookById, {
  options: props => ({
    variables: { id: props.match.params.id },
  }),
}))(View);
