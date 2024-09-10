import React from 'react';
import { useSelector } from 'react-redux';
import UserCard from './UserCard';

function Leaderboard() {
  const users = useSelector((state) => state.users);
  const sortedUsers = Object.values(users).sort((a, b) => {
    const scoreA = Object.keys(a.answers).length + a.questions.length;
    const scoreB = Object.keys(b.answers).length + b.questions.length;
    return scoreB - scoreA;
  });

  return (
    <div>
      <h3>Leaderboard</h3>
      {sortedUsers.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default Leaderboard;
