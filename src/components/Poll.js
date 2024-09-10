import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PollVote from './PollVote';
import PollResult from './PollResult';

function Poll() {
  const navigate = useNavigate();
  const { id } = useParams();
  const question = useSelector((state) => state.questions[id]);
  const authedUser = useSelector((state) => state.authedUser);
  const user = useSelector((state) => state.users[question?.author]);

  const userHasAnswered = question?.optionOne.votes.includes(authedUser) || question?.optionTwo.votes.includes(authedUser);

  useEffect(() => {
    if (question === undefined) {
      navigate("/404")
    }
  }, [question, navigate]);

  return (
    <div>
      <h2 data-testid="poll-title" className="card-title text-center mb-5">Would You Rather?</h2>
      <div className="text-center">
      <img 
        src={user?.avatarURL} 
        alt={user?.name} 
        className="rounded-circle mb-3" 
        style={{ width: '120px', height: '120px', objectFit: 'cover' }}
      />
      </div>
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          {userHasAnswered ? <PollResult id={id} /> : <PollVote id={id} />}
        </div>
      </div>
    </div>
  );
}

export default Poll;
