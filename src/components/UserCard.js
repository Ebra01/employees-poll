import React from 'react';

function UserCard({ user }) {
  const answeredCount = Object.keys(user.answers).length;
  const createdCount = user.questions.length;
  const totalPoints = answeredCount + createdCount;
  
  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body d-flex align-items-center">
        <img src={user.avatarURL} alt={user.name} className="rounded-circle user-avatar mr-3" style={{maxWidth: "15%"}} />
        <div>
          <h5 className="card-title mb-2">{user.name}</h5>
          <p className="card-text mb-1">Polls Answered: <strong>{answeredCount}</strong></p>
          <p className="card-text mb-1">Polls Created: <strong>{createdCount}</strong></p>
        </div>
      </div>
      <div className="card-footer text-muted">
        Total Points: {totalPoints}
      </div>
    </div>
  );
}

export default UserCard;
