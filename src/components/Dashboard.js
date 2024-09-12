import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import QuestionCard from './QuestionCard';
import '../static/Dashboard.css'; // Import custom CSS file

function Dashboard() {
  const questions = useSelector((state) => state.questions);
  const authedUser = useSelector((state) => state.authedUser);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('unanswered'); // Default to unanswered polls
  const location = useLocation();

  useEffect(() => {
    if (authedUser == null || authedUser === undefined) {
      navigate("/login", { state: {from: location.pathname}});
    }
  }, [navigate, location, authedUser]);

  const handleCreateNewPoll = () => {
    navigate('/add'); // Navigate to the NewPoll page
  };

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

      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'unanswered' ? 'active' : ''}`}
          onClick={() => setActiveTab('unanswered')}
        >
          Unanswered Polls
        </button>
        <button
          className={`tab-button ${activeTab === 'answered' ? 'active' : ''}`}
          onClick={() => setActiveTab('answered')}
        >
          Answered Polls
        </button>
      </div>

      <div className={`tab-content ${activeTab === 'unanswered' ? 'show' : ''}`}>
        {unansweredPolls.length ? (
          <div className="row">
            {unansweredPolls.map((qid) => (
              <div key={qid} className="col-md-6 mb-3">
                <QuestionCard id={qid} poll_status={"unanswered"} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">No unanswered polls available.</p>
        )}
      </div>

      <div className={`tab-content ${activeTab === 'answered' ? 'show' : ''}`}>
        {answeredPolls.length ? (
          <div className="row">
            {answeredPolls.map((qid) => (
              <div key={qid} className="col-md-6 mb-3">
                <QuestionCard id={qid} poll_status={"answered"} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">No answered polls available.</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
