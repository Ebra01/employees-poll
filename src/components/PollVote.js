import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleSaveQuestionAnswer } from '../actions/shared';
import '../static/PollVote.css'; // Ensure this CSS file is correctly imported

function PollVote({ id }) {
  const question = useSelector((state) => state.questions[id]);
  const [selectedOption, setSelectedOption] = useState('');
  const dispatch = useDispatch();

  const handleVote = () => {
    dispatch(handleSaveQuestionAnswer({
      qid: id,
      answer: selectedOption,
    }));
  };

  return (
    <div className="poll-vote-container">
      <span className="poll-title">Select one option?</span>
      <div className="poll-card-container mt-2">
        <div
          className={`poll-card ${selectedOption === 'optionOne' ? 'selected' : ''}`}
          onClick={() => setSelectedOption('optionOne')}
        >
          <p className='poll-option'>{question.optionOne.text}</p>
        </div>
        <div
          className={`poll-card ${selectedOption === 'optionTwo' ? 'selected' : ''}`}
          onClick={() => setSelectedOption('optionTwo')}
        >
          <p className='poll-option'>{question.optionTwo.text}</p>
        </div>
      </div>
      <button
        className="btn btn-primary submit-btn"
        onClick={handleVote}
        disabled={!selectedOption}
      >
        Submit
      </button>
    </div>
  );
}

export default PollVote;
