import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import _ from 'lodash';
import Header from '../../global/view/Header';
import CreateForm from '../../global/create/CreateForm';
import { getBooks, placeOrder } from '../../../queries';
import getInputValueByType from '../../global/input-value-handler';

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: {
        details: [],
      },
    };
  }

  save = async () => {
    const { details } = this.state.order;
    const detailsWithoutId = [];
    for (let i = 0; i < details.length; i++) {
      detailsWithoutId[i] = { ...details[i] };
      delete detailsWithoutId[i].id;
    }

    await this.props.placeOrder({
      variables: {
        orderDetails: detailsWithoutId,
      },
    });

    this.props.history.push('/customer');
  };

  cancel = () => {
    this.props.history.push('/customer');
  };

  showBooks = books => {
    let shownBooks = [];
    if (books) {
      shownBooks = books.map(book => (
        <option key={book.id} value={book.id}>
          {book.title}
        </option>
      ));
    }
    return shownBooks;
  };

  addOrderDetail = e => {
    e.preventDefault();
    const newOrderDetail = {
      id: uuid(),
      bookId: '',
      quantity: 1,
    };
    this.setState(prevState => ({
      order: {
        details: [...prevState.order.details, newOrderDetail],
      },
    }));
  };

  removeOrderDetail = (removedId, e) => {
    e.preventDefault();
    this.setState(prevState => {
      _.remove(prevState.order.details, {
        id: removedId,
      });
      return {
        order: {
          details: prevState.order.details,
        },
      };
    });
  };

  handleOrderDetailsChange = (changedId, propName, e, inputType) => {
    const newValue = e.target.value;
    this.setState(prevState => {
      const { order } = prevState;
      const orderDetail = _.find(order.details, { id: changedId });
      orderDetail[propName] = getInputValueByType(newValue, inputType);
      return {
        order: {
          details: prevState.order.details,
        },
      };
    });
  };

  displayOrderDetails = (orderDetails, books) => {
    if (orderDetails && orderDetails.length > 0) {
      return orderDetails.map(detail => {
        return (
          <tr key={detail.id}>
            <td className="td-input">
              <select
                onChange={e => this.handleOrderDetailsChange(detail.id, 'bookId', e)}
                value={detail.bookId}
                required
              >
                <option value="">-Choose Book-</option>
                {this.showBooks(books)}
              </select>
            </td>
            <td className="td-input">
              <input
                type="number"
                onChange={e => this.handleOrderDetailsChange(detail.id, 'quantity', e, 'number')}
                value={detail.quantity}
                min="1"
                required
              />
            </td>
            <td className="td-action">
              <button
                className="btn-danger btn-table"
                onClick={e => this.removeOrderDetail(detail.id, e)}
              >
                -
              </button>
            </td>
          </tr>
        );
      });
    } else {
      return (
        <tr>
          <td colSpan="3" className="text-center">
            No Data
          </td>
        </tr>
      );
    }
  };

  render() {
    const { order } = this.state;
    const { books } = this.props.getBooks;
    return (
      <CreateForm onSave={this.save} onCancel={this.cancel}>
        <Header name="New Order" />
        <table className="table">
          <thead>
            <tr>
              <th id="col-book">Book</th>
              <th id="col-quantity">Quantity</th>
              <th className="td-action">
                <button className="btn-primary btn-table" onClick={this.addOrderDetail}>
                  +
                </button>
              </th>
            </tr>
          </thead>
          <tbody>{this.displayOrderDetails(order.details, books)}</tbody>
        </table>
      </CreateForm>
    );
  }
}

Create.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  getBooks: PropTypes.shape({
    books: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })),
  }).isRequired,
  placeOrder: PropTypes.func.isRequired,
};

export default compose(
  graphql(getBooks, { name: 'getBooks' }),
  graphql(placeOrder, { name: 'placeOrder' }),
)(Create);
