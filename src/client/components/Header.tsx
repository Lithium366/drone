import * as React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Page 1</Link>
      </li>
      <li>
        <Link to="/another_page">Page 2</Link>
      </li>
    </ul>
  </nav>
);

export default Header;
