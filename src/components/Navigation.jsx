import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <div id="navigation">
    <nav>
      <ul>
        <li><Link to="/customer">Bookpedia</Link></li>
        <li><Link to='/admin'>Access as Admin</Link></li>
        <li><Link to='/customer'>Access as Customer</Link></li>
      </ul>
    </nav>
  </div>
);

export default Navigation;
