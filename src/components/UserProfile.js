// UserProfile.js
import React from 'react';
import { useSelector } from 'react-redux';
import UserCard from './UserCard';
import { useParams } from 'react-router-dom';

function UserProfile() {
  const {id} = useParams();
  const users = useSelector((state) => state.users);
  const user = users[id];
  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="container mt-4">
      <h2 className="page-title text-center">User Profile: </h2>
      <UserCard user={user} />
    </div>
  );
}

export default UserProfile;
