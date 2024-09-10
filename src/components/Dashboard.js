import React from 'react';
import { useSelector } from 'react-redux';
import QuestionCard from './QuestionCard';

function Dashboard() {
  const questions = useSelector((state) => state.questions);

  return (
    <div>
      <h3>Questions</h3>
      {Object.keys(questions).map((qid) => (
        <QuestionCard key={qid} id={qid} />
      ))}
    </div>
  );
}

export default Dashboard;
