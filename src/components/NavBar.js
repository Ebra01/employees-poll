import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add">New Poll</Link></li>
        <li><Link to="/leaderboard">Leaderboard</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
