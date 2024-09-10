import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import QuestionCard from './QuestionCard';

function Dashboard() {
  const questions = useSelector((state) => state.questions);
  const authedUser = useSelector((state) => state.authedUser);
  const navigate = useNavigate();

  const handleCreateNewPoll = () => {
    navigate('/add'); // Navigate to the NewPoll page
  };

  // Separate answered and unanswered polls
  const answeredPolls = Object.keys(questions)
  .filter(qid =>
    questions[qid].optionOne.votes.includes(authedUser) ||
    questions[qid].optionTwo.votes.includes(authedUser)
  )
  .sort((a, b) => questions[b].timestamp - questions[a].timestamp); // Sort by date created

  const unansweredPolls = Object.keys(questions)
  .filter(qid => !answeredPolls.includes(qid))
  .sort((a, b) => questions[b].timestamp - questions[a].timestamp); // Sort by date created


  return (
    <div className="container mt-4">
      <h2 className='page-title text-center mb-4'>Polls</h2>
      <div className="text-center mb-4">
        <button
          className="btn btn-outline-success"
          onClick={handleCreateNewPoll}
        >
          Create New Poll
        </button>
      </div>

      <h3 className="text-center mb-3">UnAnswered Polls</h3>
      <div className="row">
        {unansweredPolls.length ? (
          unansweredPolls.map((qid) => (
            <div key={qid} className="col-md-6 mb-3">
              <QuestionCard id={qid} poll_status={"unanswered"} />
            </div>
          ))
        ) : (
          <p className="text-center">No unanswered polls available.</p>
        )}
      </div>

      <h3 className="text-center mb-3">Answered Polls</h3>
      <div className="row">
        {answeredPolls.length ? (
          answeredPolls.map((qid) => (
            <div key={qid} className="col-md-6 mb-3">
              <QuestionCard id={qid} poll_status={"answered"} />
            </div>
          ))
        ) : (
          <p className="text-center">No answered polls available.</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
