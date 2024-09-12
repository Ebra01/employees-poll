import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import { useLocation, useNavigate } from 'react-router-dom';

function Login() {
  const [selectedUser, setSelectedUser] = useState('');
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    if (selectedUser) {
      dispatch(setAuthedUser(selectedUser));
      let redirectTo = location.state?.from || '/';
      navigate(redirectTo);
    }
  };

  return (
    <div className="card text-center p-4">
      <h2>Welcome to the Would You Rather App!</h2>
      <p>Please log in to continue</p>
      <form onSubmit={handleLogin}>
        <select
          data-testid="users-selection"
          className="form-select mb-3"
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
        >
          <option value="">Select a User</option>
          {users && Object.keys(users).map((userId) => (
            <option key={userId} value={userId}>
              {users[userId].name}
            </option>
          ))}
        </select>
        <button data-testid="login-btn" type="submit" className="btn btn-primary" disabled={!selectedUser}>
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
