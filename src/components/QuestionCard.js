import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function QuestionCard({ id }) {
  const question = useSelector((state) => state.questions[id]);
  const user = useSelector((state) => state.users[question.author]);

  return (
    <div className="card mb-3 p-3 text-center">
      <div className="d-flex flex-column align-items-center">
        {/* User avatar */}
        <img 
          src={user.avatarURL} 
          alt={user.name} 
          className="rounded-circle mb-3" 
          style={{ width: '80px', height: '80px', objectFit: 'cover' }}
        />
        <h5>{user.name} asks:</h5>
      </div>
      <Link data-testid="view-poll" to={`/questions/${id}`} className="btn btn-outline-primary mt-3">View Poll</Link>
    </div>
  );
}

export default QuestionCard;
