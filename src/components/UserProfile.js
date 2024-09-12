// UserProfile.js
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import UserCard from './UserCard';
import NotFound from "./NotFound"
import { useLocation, useNavigate, useParams } from 'react-router-dom';

function UserProfile() {
  const {id} = useParams();
  const users = useSelector((state) => state.users);
  const authedUser = useSelector((state) => state.authedUser);
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    if (authedUser == null || authedUser === undefined) {
      navigate("/login", { state: {from: location.pathname}});
    }
  }, [navigate, location, authedUser])

  const user = users[id];
  if (!user) {
    return <NotFound/>;
  }

  return (
    <div className="container mt-4">
      <h2 className="page-title text-center">User Profile: </h2>
      <UserCard user={user} />
    </div>
  );
}

export default UserProfile;
