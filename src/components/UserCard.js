import React from 'react';

function UserCard({ user }) {
  return (
    <div>
      <h4>{user.name}</h4>
      <p>Answered: {Object.keys(user.answers).length}</p>
      <p>Created: {user.questions.length}</p>
    </div>
  );
}

export default UserCard;
