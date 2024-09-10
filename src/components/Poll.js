import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PollVote from './PollVote';
import PollResult from './PollResult';

function Poll() {
  const { id } = useParams();
  const question = useSelector((state) => state.questions[id]);
  const authedUser = useSelector((state) => state.authedUser);

  const userHasAnswered = question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser);

  return (
    <div>
    <h2 data-testid="poll-title" className="card-title text-center mb-5">Would You Rather?</h2>
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        {userHasAnswered ? <PollResult id={id} /> : <PollVote id={id} />}
      </div>
    </div>
    </div>
  );
}

export default Poll;
