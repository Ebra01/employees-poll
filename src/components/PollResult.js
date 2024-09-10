import React from 'react';
import { useSelector } from 'react-redux';

function PollResult({ id }) {
  const question = useSelector((state) => state.questions[id]);
  const optionOneVotes = question.optionOne.votes.length;
  const optionTwoVotes = question.optionTwo.votes.length;
  const totalVotes = optionOneVotes + optionTwoVotes;
  const optionOnePercentage = ((optionOneVotes / totalVotes) * 100).toFixed(2);
  const optionTwoPercentage = ((optionTwoVotes / totalVotes) * 100).toFixed(2);
  
  return (
    <div className="poll-result">
      <h4 className="mb-3">Results:</h4>
      <div className="card mb-3">
        <div className="card-body">
          <h5>{question.optionOne.text}</h5>
          <p>Votes: {optionOneVotes} ({optionOnePercentage}%)</p>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: `${optionOnePercentage}%` }}></div>
          </div>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-body">
          <h5>{question.optionTwo.text}</h5>
          <p>Votes: {optionTwoVotes} ({optionTwoPercentage}%)</p>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: `${optionTwoPercentage}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PollResult;
