import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions/authedUser';

function NavBar() {
  const dispatch = useDispatch();
  const authedUser = useSelector((state) => state.authedUser);
  const user = useSelector((state) => state.users[authedUser]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/" style={{ paddingLeft: "15px" }}>Poll App</Link>
      {authedUser && (
        <>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add">New Poll</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
              </li>
            </ul>
            
            <ul className="navbar-nav ml-auto">
              <li className="nav-item d-flex align-items-center mr-4">
                <Link className="nav-link d-flex align-items-center" to={`/user/${authedUser}`}>
                  <img
                    src={user.avatarURL}
                    alt={user.name}
                    className="rounded-circle"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <span className='ml-2'>{user.name}</span>
                </Link>
              </li>
              <li className="nav-item d-flex align-items-center mr-4">
                <button
                  className="btn btn-outline-danger"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
}

export default NavBar;
