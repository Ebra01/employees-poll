import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function PollResult({ id }) {
  const navigate = useNavigate();
  const question = useSelector((state) => state.questions[id]);
  const authedUser = useSelector((state) => state.authedUser);
  
  const optionOneVotes = question?.optionOne.votes.length;
  const optionTwoVotes = question?.optionTwo.votes.length;
  const totalVotes = optionOneVotes + optionTwoVotes;
  
  const optionOnePercentage = ((optionOneVotes / totalVotes) * 100).toFixed(2);
  const optionTwoPercentage = ((optionTwoVotes / totalVotes) * 100).toFixed(2);

  useEffect(() => {
    if (question === undefined) {
      navigate("/404")
    }
  }, [question, navigate]);

  // Determine which option the user selected
  const userSelectedOption = question?.optionOne.votes.includes(authedUser) ? 'optionOne' : 'optionTwo';
  console.log("RISK: ", userSelectedOption)
  return (
    <div className="poll-result">
      <h4 className="mb-3">Results:</h4>
      <div className={`card mb-3`} style={userSelectedOption === "optionOne" ? {border: "2px solid #0037ff", backgroundColor: "#f0f8ff"} : {}}>
        <div className="card-body">
          <h5>{question?.optionOne.text}</h5>
          <p>Votes: {optionOneVotes} ({optionOnePercentage}%)</p>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: `${optionOnePercentage}%` }}></div>
          </div>
        </div>
      </div>
      <div className={`card mb-3`} style={userSelectedOption === "optionTwo" ? {border: "2px solid #0037ff", backgroundColor: "#f0f8ff"} : {}}>
        <div className="card-body">
          <h5>{question?.optionTwo.text}</h5>
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
