import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function QuestionCard({ id }) {
  const question = useSelector((state) => state.questions[id]);

  return (
    <div>
      <h4>{question.author} asks:</h4>
      <Link to={`/questions/${id}`}>View Poll</Link>
    </div>
  );
}

export default QuestionCard;
