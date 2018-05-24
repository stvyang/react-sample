import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import { getOrders } from '../../queries';
import Loading from '../global/Loading';
import NotFound from '../global/NotFound';

function displayOrders(orders, match) {
  const displayedOrders = orders.map(order => {
    return (
      <div className="order-card">
        <div className="title">
          <Link to={`${match.url}/order/${order.id}`}>{order.id}</Link>
        </div>
        <div id="order-date">{order.orderDate}</div>
        <div id="order-total">${order.totalPayment}</div>
      </div>
    );
  });
  return displayedOrders;
}

function displayDashboard(isLoading, orders, match) {
  if (isLoading) {
    return <Loading />;
  } else if (orders.length > 0) {
    return (
      <div className="order-board">
        <div className="card-list">{displayOrders(orders, match)}</div>
      </div>
    );
  } else {
    return <NotFound name="Unfortunately, you did not have any order yet." />;
  }
}

function Dashboard(props) {
  const { data, match } = props;
  return (
    <div>
      <h3>Orders</h3>
      <button>
        <Link className="a-primary" to={`${match.url}/order/create`}>
          Place Order
        </Link>
      </button>
      {displayDashboard(data.loading, data.orders, match)}
    </div>
  );
}

Dashboard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    orderDate: PropTypes.instanceOf(Date),
    totalPayment: PropTypes.number,
  })).isRequired,
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default graphql(getOrders, {
  options: {
    fetchPolicy: 'network-only',
  },
})(Dashboard);
