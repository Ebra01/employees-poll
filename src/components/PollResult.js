import React from 'react';
import { useSelector } from 'react-redux';

function PollResult({ id }) {
  const question = useSelector((state) => state.questions[id]);
  const optionOneVotes = question.optionOne.votes.length;
  const optionTwoVotes = question.optionTwo.votes.length;
  const totalVotes = optionOneVotes + optionTwoVotes;

  return (
    <div>
      <h4>Results:</h4>
      <div>
        {question.optionOne.text}: {optionOneVotes} votes ({((optionOneVotes / totalVotes) * 100).toFixed(2)}%)
      </div>
      <div>
        {question.optionTwo.text}: {optionTwoVotes} votes ({((optionTwoVotes / totalVotes) * 100).toFixed(2)}%)
      </div>
    </div>
  );
}

export default PollResult;
