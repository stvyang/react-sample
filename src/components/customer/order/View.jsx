import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose, graphql } from 'react-apollo';
import _ from 'lodash';
import ViewForm from '../../global/view/ViewForm';
import { getOrderById, deleteOrderById } from '../../../queries';
import Loading from '../../global/Loading';
import NotFound from '../../global/NotFound';

class View extends Component {
  deleteOrder = async () => {
    await this.props.deleteOrderById({
      variables: {
        id: this.props.match.params.id,
      },
    });
    this.props.history.push('/customer');
  };

  displayOrderDetails = orderDetails => {
    if (orderDetails && orderDetails.length > 0) {
      return orderDetails.map(detail => {
        return (
          <tr key={detail.id}>
            <td className="text-center">{detail.book.title}</td>
            <td className="text-center">{detail.quantity}</td>
          </tr>
        );
      });
    } else {
      return (
        <tr>
          <td colSpan="2" className="text-center">
            No Data
          </td>
        </tr>
      );
    }
  };

  render() {
    const { data } = this.props;
    const { order } = data;
    if (this.props.data.loading) {
      return <Loading />;
    } else if (!_.isEmpty(this.props.data.order)) {
      return (
        <ViewForm title="Detail Order" onDelete={this.deleteOrder}>
          <div className="view-form-record">
            <label htmlFor="orderDate">ID</label>
            <span id="orderDate">{order ? order.id : null}</span>
          </div>
          <div className="view-form-record">
            <label htmlFor="orderDate">Order Date</label>
            <span id="orderDate">{order ? order.orderDate : null}</span>
          </div>
          <div className="view-form-record">
            <label htmlFor="orderDate">Total Payment</label>
            <span id="orderDate">{order ? order.totalPayment : null}</span>
          </div>
          <div className="view-form-record">
            <label htmlFor="orderDate">Order Details</label>
            <table className="table">
              <thead>
                <tr>
                  <th>Book</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>{this.displayOrderDetails(order ? order.orderDetails : null)}</tbody>
            </table>
          </div>
        </ViewForm>
      );
    } else {
      return <NotFound name={this.notFound} />;
    }
  }
}

View.propTypes = {
  data: PropTypes.shape({
    order: PropTypes.shape({
      orderDate: PropTypes.instanceOf(Date),
      totalPayment: PropTypes.number,
      orderDetails: PropTypes.arrayOf(PropTypes.shape({
        book: PropTypes.shape({
          title: PropTypes.string,
        }),
        quantity: PropTypes.number,
      })),
    }),
    loading: PropTypes.bool.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  deleteOrderById: PropTypes.func.isRequired,
};

export default compose(
  graphql(getOrderById, {
    options: props => ({
      variables: { id: props.match.params.id },
    }),
  }),
  graphql(deleteOrderById, { name: 'deleteOrderById' }),
)(View);
