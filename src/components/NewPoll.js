import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleAddQuestion } from '../actions/shared';

function NewPoll() {
  const [optionOneText, setOptionOneText] = useState('');
  const [optionTwoText, setOptionTwoText] = useState('');
  const authedUser = useSelector((state) => state.authedUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (optionOneText.trim() && optionTwoText.trim()) {
      dispatch(
        handleAddQuestion({
          optionOneText,
          optionTwoText,
          author: authedUser,
        })
      );
      navigate('/');
    }
  };

  return (
    <div className="new-poll-container">
      <h2>Create New Poll</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="optionOne">Option One</label>
          <input
            type="text"
            id="optionOne"
            value={optionOneText}
            onChange={(e) => setOptionOneText(e.target.value)}
            placeholder="Enter Option One Text"
          />
        </div>
        <div>
          <label htmlFor="optionTwo">Option Two</label>
          <input
            type="text"
            id="optionTwo"
            value={optionTwoText}
            onChange={(e) => setOptionTwoText(e.target.value)}
            placeholder="Enter Option Two Text"
          />
        </div>
        <button type="submit" disabled={!optionOneText || !optionTwoText}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewPoll;
