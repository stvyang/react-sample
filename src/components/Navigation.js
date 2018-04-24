import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to='/customer'>Bookpedia</Link></li>
        <li><Link to='/admin'>Access as Admin</Link></li>
        <li><Link to='/customer'>Access as Customer</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
