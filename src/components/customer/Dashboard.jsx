import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <h3>Orders</h3>
        <button>
          <Link className="a-primary" to={`${match.url}/order/create`}>
            Place Order
          </Link>
        </button>
      </div>
    );
  }
}

export default Dashboard;
