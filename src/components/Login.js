import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

function Login() {
  const [selectedUser, setSelectedUser] = useState('');
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    if (selectedUser) {
      dispatch(setAuthedUser(selectedUser));
    }
  };

  return (
    <div className="login-container">
      <h2>Welcome to the Would You Rather App!</h2>
      <p>Please log in to continue</p>
      <form onSubmit={handleLogin}>
        <select
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
        >
          <option value="">Select a User</option>
          {Object.keys(users).map((userId) => (
            <option key={userId} value={userId}>
              {users[userId].name}
            </option>
          ))}
        </select>
        <button type="submit" disabled={!selectedUser}>
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
