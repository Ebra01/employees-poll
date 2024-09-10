import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import QuestionCard from './QuestionCard';

function Dashboard() {
  const questions = useSelector((state) => state.questions);
  const navigate = useNavigate();

  const handleCreateNewPoll = () => {
    navigate('/add'); // Navigate to the NewPoll page
  };

  return (
    <div className="container mt-4">
      <h2 className='page-title text-center mb-4'>Polls</h2>
      <div className="text-center mb-4">
        <button
          className="btn btn-outline-success btn-block"
          onClick={handleCreateNewPoll}
        >
          Create New Poll
        </button>
      </div>
      <div className="row">
        {Object.keys(questions).map((qid) => (
          <div key={qid} className="col-md-6 mb-3">
            <QuestionCard id={qid} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
